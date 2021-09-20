import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
  counter_button = 0;
  @Output() mySharedValues:EventEmitter<Number> = new EventEmitter();
  constructor() { }
  onIncrement(){
    this.counter_button=this.counter_button+1;
    this.mySharedValues.emit(this.counter_button)
  }
  onDecrement(){
    this.counter_button=this.counter_button-1;
    this.mySharedValues.emit(this.counter_button)
  }
  onReset(){
    this.counter_button=0;
    this.mySharedValues.emit(this.counter_button)
  }
  ngOnInit(): void {
  }

}
