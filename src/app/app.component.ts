import { FullCalendarComponent } from "@fullcalendar/angular";
import { Component, ViewChild } from "@angular/core";
import { CalendarOptions } from "@fullcalendar/angular";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  @ViewChild("calendar") calendarComponent: FullCalendarComponent;
  title = "Angular-calendar";

  calendarOptions: CalendarOptions = {
    initialView: "dayGridMonth",
    dateClick: this.handleDateClick.bind(this),

    headerToolbar: {
      left: "prev,today,next",
      center: "title",
      right: "dayGridMonth,dayGridWeek,dayGridDay",
    },
    views: {
      dayGridMonth: {
        buttonText: "Month View",
      },
      dayGridWeek: {
        buttonText: "Week View",
      },
      dayGridDay: {
        buttonText: "Day View",
      },
    },
    navLinks: true,
    // editable: true,
    selectable: true,
    nowIndicator: true,
    dayMaxEvents: true,
    events: [
      { title: "30", date: "2021-07-27" },
      { title: "14", date: "2021-07-20" },
      { title: "45", date: "2021-07-21" },
      { title: "23", date: "2021-07-18" },
      { title: "15", date: "2021-07-17" },
    ],
  };

  onSelect(event) {
    let calendarApi = this.calendarComponent.getApi();
    calendarApi.changeView("dayGridDay");
    console.log(event);
  }

  handleDateClick(arg) {
    console.log(arg.dateStr);
  }
}
