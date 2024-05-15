import { Component, OnInit, inject } from '@angular/core';
import { TagsService } from '../services/food/tags.service';
import { tag } from '../models/tag';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrl: './tag.component.css'
})
export class TagComponent implements OnInit {

  public imgType ="round";
  public sliderType ="tagList";
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
