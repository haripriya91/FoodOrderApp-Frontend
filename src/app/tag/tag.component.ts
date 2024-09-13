import { Component, OnInit, inject, Input, EventEmitter, Output } from '@angular/core';
import { TagsService } from '../services/food/tags.service';
import { tag } from '../models/tag';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrl: './tag.component.css'
})
export class TagComponent implements OnInit {

  //public imgType ="round";
  //public sliderType ="tagList";
  @Input() imgType :string = "round";
  @Input() sliderType :string ="tagList";
  @Input() sliderCount : number = 4;
  @Input() h3Class!: string;
  @Output() imageClick = new EventEmitter<string>();

  public tags : tag[] =[];
  private tagService = inject(TagsService);

   
  

  ngOnInit(): void {
    this.getAlltags();
  }

  getAlltags(){
    this.tagService.getTags().subscribe((tags:tag[]) => {
      this.tags =tags;     
    })
  }

  onImgCick(tagName :any) {
    this.imageClick.emit(tagName);
  }

  tagSlides =  [
    {img: 'assets/tags/tbn/tag1.jpg',name: 'All' },
    {img:    'assets/tags/tbn/tag2.jpg',name : 'fastFood'},
    {img: 'assets/tags/tbn/tag3.jpg',name : 'pizza'},
    {img: 'assets/tags/tbn/tag4.jpg',name : 'lunch'},
    {img: 'assets/tags/tbn/tag5.jpg', name : 'burger'},
    {img: 'assets/tags/tbn/tag6.jpg',name : 'biriyani'},
    {img: 'assets/tags/tbn/tag7.jpg',name : 'italian'},
    {img: 'assets/tags/tbn/tag8.jpg',name : 'asian'},
  ];
}
