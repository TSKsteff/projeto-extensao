
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import events from './events'
// Setup the localizer by providing the moment (or globalize, or Luxon) Object
// to the correct localizer.
const localizer = momentLocalizer(moment) // or globalizeLocalizer

const MyCalendar = () => (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );

  export default MyCalendar;