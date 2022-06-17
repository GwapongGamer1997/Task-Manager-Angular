import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

  @Input() rating: number = 0;
  @Output() notify: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  updateStarRating(isAdd: boolean){
    if(isAdd){
      this.notify.emit(this.rating++)
    }else{
      this.notify.emit(this.rating--)
    }
  }

  counter() {
    return new Array(this.rating);
  }
}
