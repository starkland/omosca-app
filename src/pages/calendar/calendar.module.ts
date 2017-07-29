import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalendarPage } from './calendar';
import { CalendarService } from './calendar.service';

import { NgCalendarModule  } from 'ionic2-calendar';

@NgModule({
  declarations: [
    CalendarPage,
  ],
  imports: [
    NgCalendarModule,
    IonicPageModule.forChild(CalendarPage),
  ],
  exports: [
    CalendarPage
  ],
  providers: [
    CalendarService
  ]
})
export class CalendarPageModule {}
