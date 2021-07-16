import { Component, Input, OnInit, Output, EventEmitter, ChangeDetectionStrategy, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-day-container',
  templateUrl: './day-container.component.html',
  styleUrls: ['./day-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DayContainerComponent implements OnInit {

  @Input()
  config: any;

  @Input()
  selected: boolean = false;

  constructor() { 
    console.log('drawing');
  }

  ngOnInit(): void {
  }

}
