import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DataService} from 'src/app/services/data.service';
import { DateMathService } from '../../services/datemath.service';

@Component({
  selector: 'app-calendar-container',
  templateUrl: './calendar-container.component.html',
  styleUrls: ['./calendar-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarContainerComponent implements OnInit {

  private month: Date;

  daysToShow: any[] = [];

  get currentMonth(): string {
    return this.month.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  }

  constructor(private dateMathService: DateMathService, private dataService: DataService) { 
    const date = new Date();
    this.month = new Date(date.getFullYear(), date.getMonth(), 1);
  }

  ngOnInit(): void {
    this.generateDaysToShow();
  }

  nextMonth(): void {
    this.month.setMonth(this.month.getMonth() + 1);
    this.generateDaysToShow();
  }

  prevMonth(): void {
    this.month.setMonth(this.month.getMonth() - 1);
    this.generateDaysToShow();
  }


  generateDaysToShow() {
     const daysToShow = this.dateMathService.days(this.month);
     const dataToShow = this.dataService.getDataInRange(this.month, new Date(this.month.getFullYear(), this.month.getMonth() + 1, 0));
     this.daysToShow = daysToShow.map(day => {
       return {
         ...day,
         data: dataToShow[day.date.toDateString() as any] 
       }
     });
     console.log(this.daysToShow);
  }

}
