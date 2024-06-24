'use client'

import MyCalendar, { CalendarEvent } from "@/components/Calendar";
import EventModal from "@/components/Modal";
import Image from "next/image";
import { useState } from "react";
import { SlotInfo } from "react-big-calendar";



export default function Calendar() {
  const [events, setEvents] = useState<CalendarEvent[]>([])
  const [showModal, setShowModal] = useState(false);
  const [ currentDate, setCurrentDate] = useState<{start: Date, end: Date } | undefined>()

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleSelectDate = (slot: SlotInfo) => {
    setCurrentDate({start: slot.start, end: slot.end})
    handleShow()
  }

  const handleSaveEvent = (data: {email: string, description: string, time: string}) => {
    setEvents(prev => [...prev, {
      id: crypto.randomUUID();
      title: ${data.email} ${data.time};
      start: currentDate?.start;
      end: currentDate?.end;
    }])

  }

  return (
       <section className="bg-white">
         <MyCalendar onDateSelect={handleSelectDate} events={events}/>
         <EventModal open={showModal} handleClose={handleClose} handleSaveEvent={handleSaveEvent} />
        </section>
  );
}