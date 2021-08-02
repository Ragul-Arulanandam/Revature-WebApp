import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  
  @Input("value")
  review: any = {}

  starsArr: Array<any> = []
  constructor() { }

  ngOnInit(): void {
    this.starsArr = Array(this.review.stars).fill(0).map(n => n);

  }

}
