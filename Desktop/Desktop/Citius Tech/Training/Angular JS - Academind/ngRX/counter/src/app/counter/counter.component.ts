import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  counter_parent = 0;
  constructor() { }
  getData(event:any) {
    this.counter_parent = event;
  }
  ngOnInit(): void {
  }

}
