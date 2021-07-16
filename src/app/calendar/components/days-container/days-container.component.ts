import { ChangeDetectionStrategy, Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-days-container',
  templateUrl: './days-container.component.html',
  styleUrls: ['./days-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DaysContainerComponent implements OnInit {

  @Input()
  daysToShow: any | null = null;

  selectedDay: Date | null = null;

  constructor() { }

  ngOnInit(): void {
  }

  selectDay(dayConfig: any): void {
    this.selectedDay = new Date(dayConfig.date);
  }

  isSelected(dayConfig: any): boolean {
    return this.selectedDay != null && this.selectedDay.getTime() == dayConfig.date.getTime();
  }

}
