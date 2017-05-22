import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

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
  }>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController) {

    this.calendar = {
      mode: 'month',
      currentDate: new Date(),
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
      }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalendarPage');
  }

  onCurrentDateChanged = (ev: Date) => {
    console.warn('Currently viewed date:', ev);
  };

  onEventSelected = (event) => {
    this.selectedEvent = event;

    let modal = this.modalCtrl.create(event);
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
