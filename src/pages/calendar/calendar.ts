import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { CalendarModal } from './calendar-modal';
import { CalendarService } from './calendar.service';

@IonicPage({
  name: 'calendar',
})
@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html',
})
export class CalendarPage {

  calendar: any;
  selectedEvent: Object;
  viewTitle: String;
  eventSource: Array<{
    eventId: number,
    title: string,
    startTime: Date,
    endTime: Date,
    allDay: boolean,
    details: any
  }>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    private calendarservice: CalendarService) {

    this.calendar = {
      mode: 'month',
      currentDate: new Date()
    };

    this.selectedEvent = '';
    this.viewTitle = '';

    this.eventSource = [
      {
        eventId: 1,
        title: 'Evento de teste!',
        startTime: new Date(),
        endTime: new Date(),
        allDay: false,
        details: ''
      }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalendarPage');

    this.calendarservice.getEvents().then(result => {
      for (let item in result) {
        let obj = {
          eventId: Number(item),
          title: result[item].name,
          startTime: new Date(result[item].date),
          endTime: new Date(result[item].date),
          details: result[item],
          allDay: false
        };

        this.eventSource.push(obj);
      }
    });
  };

  onCurrentDateChanged = (ev: Date) => {
    console.warn('Currently viewed date:', ev);
  };

  onEventSelected = (evtObj) => {
    console.warn(evtObj);
    const obj = { evtId: evtObj };
    let modal = this.modalCtrl.create(CalendarModal, obj);
    modal.present();
  };

  onViewTitleChanged = (title: string) => {
    this.viewTitle = title;
  };

  onTimeSelected = (ev: { selectedTime: Date, events: any[] }) => {
    console.warn('Selected time: ' + ev.selectedTime + ', hasEvents: ' + (ev.events !== undefined && ev.events.length !== 0));
  };

  previousMonth() {
    let crDate = this.calendar.currentDate;
    let crMonth = this.calendar.currentDate.getMonth();

    this.calendar.currentDate = new Date(crDate.setMonth(crMonth -1));
  };

  nextMonth() {
    let crDate = this.calendar.currentDate;
    let crMonth = this.calendar.currentDate.getMonth();

    this.calendar.currentDate = new Date(crDate.setMonth(crMonth + 1));
  };
}
