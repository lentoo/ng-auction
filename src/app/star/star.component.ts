import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit, OnChanges {


  @Input()
  public star: number = 0;
  @Output()
  starChange: EventEmitter<number> = new EventEmitter();
  @Input()
  readonly: boolean = true;
  private stars: boolean[];
  constructor() { }

  ngOnInit() {

  }
  ngOnChanges(changes: SimpleChanges): void {
    this.stars = [];
    for (let i = 1; i <= 5; i++) {
      this.stars.push(this.star < i);
    }
  }
  starChanges(index) {
    if (this.readonly) {
      return;
    }
    let currentStar = index + 1;
    this.star = currentStar;
    this.starChange.emit(this.star);
  }
}
