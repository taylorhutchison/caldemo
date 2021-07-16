import { Injectable } from '@angular/core';
import { CalendarModule } from '../calendar.module';

@Injectable({
  providedIn: 'root'
})
export class DateMathService {

  constructor() { }


  days(firstDayOfMonth: Readonly<Date>): { isCurrentMonth: boolean, date: Date } [] {
    const days = [];
    //Initialize date object with first day of the month
    const startDate = new Date(firstDayOfMonth);
    // Set it back to the most recent Sunday
    startDate.setDate(startDate.getDate() - startDate.getDay());

    const endDate = new Date(firstDayOfMonth.getFullYear(), firstDayOfMonth.getMonth() + 1, 0); 
    // Set forward to nearest Saturday at or after last day of month
    endDate.setDate(endDate.getDate() + (6 - endDate.getDay()));

    while(startDate <= endDate) {
      const obj = {
        isCurrentMonth: startDate.getMonth() == firstDayOfMonth.getMonth(),
        date: new Date(startDate)
      }
      days.push(obj);
      startDate.setDate(startDate.getDate() + 1);
    }

    return days;
  }

}
