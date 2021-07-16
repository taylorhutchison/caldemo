import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarContainerComponent } from './components/calendar-container/calendar-container.component';
import { DayContainerComponent } from './components/day-container/day-container.component';
import { DaysContainerComponent } from './components/days-container/days-container.component';



@NgModule({
  declarations: [
    CalendarContainerComponent,
    DaysContainerComponent,
    DayContainerComponent
  ],
  exports: [
    CalendarContainerComponent,
    DayContainerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CalendarModule { }
