import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface StatusData {
  title: string;
  description: string;
  status: 'completed' | 'pending' | 'error';
  progress: number;
  lastUpdated: Date;
  priority: string;
}

interface CalendarDay {
  date: Date;
  isCurrentMonth: boolean;
}

interface Event {
  title: string;
  time: string;
  date: Date;
}

@Component({
  selector: 'app-status-card',
  standalone: false,
  templateUrl: './listado-ticket.html',
  styleUrls: ['./listado-ticket.css']
})
export class ListadoTicket implements OnInit {
  isExpanded = false;
  status: StatusData = {
    title: 'Project Deployment',
    description: 'Current status of the project deployment pipeline',
    status: 'completed',
    progress: 100,
    lastUpdated: new Date(),
    priority: 'High'
  };

  get statusClass(): string {
    return `status-${this.status.status}`;
  }

  get statusIcon(): string {
    const icons = {
      completed: 'fa-check-circle',
      pending: 'fa-clock',
      error: 'fa-exclamation-circle'
    };
    return icons[this.status.status];
  }

  constructor() { }

  toggleExpand(): void {
    this.isExpanded = !this.isExpanded;
  }

  viewDetails(event: PointerEvent): void {
    console.log('Viewing details...', event);
  }

  takeAction(event: PointerEvent): void {
    console.log('Taking action...', event);
    // Add your action logic here
  }

  weekDays: string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  calendarDays: CalendarDay[] = [];
  weekViewDays: CalendarDay[] = [];
  currentDate: Date = new Date();
  selectedDate: Date = new Date();
  currentView: "month" | "week" = "month";
  showEventModal: boolean = false;
  events: Event[] = [];
  newEvent: Event = {
    title: "",
    time: "",
    date: new Date()
  };

  ngOnInit() {
    this.generateCalendarDays();
    this.generateWeekViewDays();
    this.loadSampleEvents();
  }

  loadSampleEvents() {
    this.events = [
      { title: "Team Meeting", time: "09:00", date: new Date() },
      { title: "Lunch with Client", time: "12:30", date: new Date() }
    ];
  }

  generateCalendarDays() {
    const firstDayOfMonth = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 1);
    const lastDayOfMonth = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 0);
    const startDate = new Date(firstDayOfMonth);
    startDate.setDate(startDate.getDate() - startDate.getDay());

    this.calendarDays = [];
    for (let i = 0; i < 42; i++) {
      const date = new Date(startDate);
      date.setDate(date.getDate() + i);
      this.calendarDays.push({
        date: date,
        isCurrentMonth: date.getMonth() === this.currentDate.getMonth()
      });
    }
  }

  generateWeekViewDays() {
    const startOfWeek = new Date(this.currentDate);
    startOfWeek.setDate(this.currentDate.getDate() - this.currentDate.getDay());

    this.weekViewDays = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(startOfWeek);
      date.setDate(date.getDate() + i);
      this.weekViewDays.push({
        date: date,
        isCurrentMonth: date.getMonth() === this.currentDate.getMonth()
      });
    }
  }

  previousView() {
    if (this.currentView === "month") {
      this.currentDate.setMonth(this.currentDate.getMonth() - 1);
    } else {
      this.currentDate.setDate(this.currentDate.getDate() - 7);
    }
    this.updateView();
  }

  nextView() {
    if (this.currentView === "month") {
      this.currentDate.setMonth(this.currentDate.getMonth() + 1);
    } else {
      this.currentDate.setDate(this.currentDate.getDate() + 7);
    }
    this.updateView();
  }

  goToToday() {
    this.currentDate = new Date();
    this.selectedDate = new Date();
    this.updateView();
  }

  updateView() {
    if (this.currentView === "month") {
      this.generateCalendarDays();
    } else {
      this.generateWeekViewDays();
    }
  }

  switchView(view: "month" | "week") {
    this.currentView = view;
    this.updateView();
  }

  selectDate(date: Date) {
    this.selectedDate = date;
  }

  isCurrentDay(date: Date): boolean {
    const today = new Date();
    return date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear();
  }

  isSelectedDate(date: Date): boolean {
    return date.getDate() === this.selectedDate.getDate() &&
      date.getMonth() === this.selectedDate.getMonth() &&
      date.getFullYear() === this.selectedDate.getFullYear();
  }

  getEventsForDate(date: Date): Event[] {
    return this.events.filter(event =>
      event.date.getDate() === date.getDate() &&
      event.date.getMonth() === date.getMonth() &&
      event.date.getFullYear() === date.getFullYear()
    );
  }

  get selectedDateEvents(): Event[] {
    return this.getEventsForDate(this.selectedDate);
  }

  addNewEvent() {
    this.newEvent = {
      title: "",
      time: "",
      date: this.selectedDate
    };
    this.showEventModal = true;
  }

  saveEvent() {
    if (this.newEvent.title && this.newEvent.time) {
      this.events.push({ ...this.newEvent });
      this.closeModal();
    }
  }

  closeModal() {
    this.showEventModal = false;
  }
}
