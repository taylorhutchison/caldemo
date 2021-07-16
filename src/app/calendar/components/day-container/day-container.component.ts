import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-day-container',
  templateUrl: './day-container.component.html',
  styleUrls: ['./day-container.component.scss']
})
export class DayContainerComponent implements OnInit {

  @Input()
  config: any;

  @Input()
  selected: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
