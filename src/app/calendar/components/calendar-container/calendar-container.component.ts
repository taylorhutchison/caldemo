import { Component, OnInit } from '@angular/core';
import { DateMathService } from '../../services/datemath.service';

@Component({
  selector: 'app-calendar-container',
  templateUrl: './calendar-container.component.html',
  styleUrls: ['./calendar-container.component.scss']
})
export class CalendarContainerComponent implements OnInit {

  private month: Date;

  daysToShow: any;

  selectedDay: Date | null = null;

  get currentMonth(): string {
    return this.month.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  }

  constructor(private dateMathService: DateMathService) { 
    const date = new Date();
    this.month = new Date(date.getFullYear(), date.getMonth(), 1);
  }

  ngOnInit(): void {
    this.daysToShow = this.dateMathService.days(this.month);
  }

  nextMonth(): void {
    this.month.setMonth(this.month.getMonth() + 1);
    this.daysToShow = this.dateMathService.days(this.month);
  }

  prevMonth(): void {
    this.month.setMonth(this.month.getMonth() - 1);
    this.daysToShow = this.dateMathService.days(this.month);
  }

  isSelected(dayConfig: any): boolean {
    return this.selectedDay != null && this.selectedDay.getTime() == dayConfig.date.getTime();
  }

}
