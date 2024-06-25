"use client";

import { Calendar, SlotInfo, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import events from "./events";
import "react-big-calendar/lib/css/react-big-calendar.css";

export interface CalendarEvent {
  id: number;
  title: string;
  start: Date;
  end: Date;
  desc?: string; // Opcional: descrição pode ou não estar presente
}

const localizer = momentLocalizer(moment); // or globalizeLocalizer

interface MyCalendarProps {
  onDateSelect?: ((slotInfo: SlotInfo) => void) | undefined;
  events: CalendarEvent[];
}

const MyCalendar = (props: MyCalendarProps) => (
  <div>
    <Calendar
      selectable
      localizer={localizer}
      events={props.events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
      onSelectSlot={props.onDateSelect}
    />
  </div>
);

export default MyCalendar;
