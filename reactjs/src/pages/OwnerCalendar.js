import React, { useState } from "react";
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

export default function OwnerCalendar() {
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState([]);

  const handleAddEvent = () => {
    console.log(newEvent);
    setAllEvents([...allEvents, newEvent]);
    setNewEvent({ title: "", start: "", end: "" });
  };
  return (
    <div className="calendar-form">
      <h1>Calendar</h1>
      <Calendar
        localizer={localizer}
        startAccessor="start"
        endAccessor="end"
        events={allEvents}
        style={{ height: 500, margin: "50px" }}
      />
      <h2>Add New Event</h2>
      <div>
        <input
          type="text"
          placeholder="Title "
          style={{ width: "20%", marginRight: "10px" }}
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />
        <DatePicker
          placeholderText="Start Date"
          style={{ marginRight: "10px" }}
          selected={newEvent.start}
          showTimeSelect
          dateFormat="Pp"
          onChange={(start) => setNewEvent({ ...newEvent, start })}
        />
        <DatePicker
          placeholderText="End Date"
          selected={newEvent.end}
          showTimeSelect
          dateFormat="Pp"
          onChange={(end) => setNewEvent({ ...newEvent, end })}
        />
        <button style={{ marginTop: "10px" }} onClick={handleAddEvent}>
          Add Event
        </button>
      </div>
    </div>
  );
}
