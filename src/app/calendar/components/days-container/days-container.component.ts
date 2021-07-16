import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-days-container',
  templateUrl: './days-container.component.html',
  styleUrls: ['./days-container.component.scss']
})
export class DaysContainerComponent implements OnInit {

  @Input()
  daysToShow: any | null = null;

  constructor() { }

  ngOnInit(): void {
  }

  selectDay(dayConfig: any): void {
  }

}
