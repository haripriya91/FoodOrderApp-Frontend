import { AfterViewInit, Component, HostListener, inject } from '@angular/core';
import { OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Food } from '../models/food';
import { MatDialog } from '@angular/material/dialog';
import { CommonModalComponent } from '../shared/general/common-modal/common-modal.component';
import { ModalData } from '../models/modal-data';
import { ModalType } from '../models/modal-type';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  implements OnInit, AfterViewInit {

  public foods: Food[] = []; // current set of items
  public allFoods: Food[] = []; // set of items fetched from the service
  public filteredFoods: Food[] = []; // set of items after filtering
  pageSize : number = 4;
  currentPage : number = 0;
  private foodService = inject(FoodService);

  isFixed: boolean = false;
  headerHeight!: number;
  public h3Class!: string;


  constructor(public dialog: MatDialog,private route: ActivatedRoute) {
   
  }

  openInfoDialog(): void {
    const popupData: ModalData = {
      type : ModalType.INFO,
      title : 'Disclaimer',
      content:'test data'
     };
    this.dialog.open(CommonModalComponent, { data: popupData });
  }

  openFormDialog(): void  {
    const popupData:ModalData =  {
      type : ModalType.FORM,
      title : 'Filter'
    };
    this.dialog.open(CommonModalComponent, { data: popupData });
  }

  ngOnInit(): void {
    this.getAllFoodList(); 
    this.h3Class = this.route.snapshot.data['h3Class'];
  }

  loadMoreFoods(){
    const startIndex = this.currentPage * this.pageSize;
    const lastIndex = startIndex + this.pageSize;
    this.foods = [...this.foods, ...this.filteredFoods.slice(startIndex,lastIndex)];
    this.currentPage ++;
  }

  onScroll() {
    if(this.foods.length < this.allFoods.length) {
      this.loadMoreFoods();
    }
  }

  ngAfterViewInit() {
    // Get the header height after the view initializes
    const header = document.querySelector('.header');
    this.headerHeight = header ? header.clientHeight : 0;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    this.isFixed = scrollPosition > this.headerHeight;
  }
  getAllFoodList(){
    this.foodService.getFoodList().subscribe((foods: Food[]) => {
      // Use the pipe to transform the imageUrl
      this.allFoods = foods;
      this.filteredFoods = foods; // initialize filteredFoods with all foods
      this.loadMoreFoods();
    });
    console.log(this.foods);
  }

  onSearchTermChanged(searchTerm: string) {
    this.filteredFoods = this.allFoods.filter(food => 
      food.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    this.resetFoods();
  }

  onImgCick(tagName:string) {

    const tagLowercase = tagName.toLowerCase();
    if(tagLowercase == 'all') {
      this.filteredFoods = [];
      this.filteredFoods =this.allFoods;
    } else {
      this.filteredFoods = this.allFoods.filter(food => 
        food.tags && food.tags.some(tag => tag.toLowerCase() === tagLowercase )
      );
    } 
    this.resetFoods();
    
  }

  resetFoods() {
    this.foods = [];
    this.currentPage = 0;
    this.loadMoreFoods();
  }

}
