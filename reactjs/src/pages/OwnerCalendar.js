import React, { useContext, useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import API from "../api";
import { UserContext } from "../contexts/UserContext";
import moment from "moment";

const localizer = momentLocalizer(moment);

export default function OwnerCalendar() {
  const [newEvent, setNewEvent] = useState({ player: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    const getReservations = async () => {
      try {
        const { data } = await API.get("getReservations/", {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        if (!data.reservations) return;
        const fetchedEvents = data.reservations.map((event) => {
          return {
            ...event,
            start: new Date(event.start),
            end: new Date(event.end),
          };
        });
        setAllEvents([...fetchedEvents]);
      } catch (error) {
        alert("Reservations couldn't be fetched !!");
        console.log(error.message);
      }
    };
    getReservations();
  }, []);

  const handleAddEvent = async () => {
    if (
      newEvent.player === "" ||
      newEvent.start === "" ||
      newEvent.end === ""
    ) {
      alert("Please Fill all the fields");
      return;
    }
    try {
      const { data } = await API.post(
        "addGame/",
        { newEvent: newEvent, propertyID: user.info.property._id },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      setAllEvents([...allEvents, newEvent]);
      setNewEvent({ player: "", start: "", end: "" });
    } catch (error) {
      alert("Game couldn't be set");
      console.log(error);
    }
  };
  return (
    <div className="calendar-form">
      <h1 className="align-center">Calendar</h1>
      <Calendar
        localizer={localizer}
        startAccessor="start"
        endAccessor="end"
        events={allEvents}
        style={{ height: 500, margin: "50px" }}
      />
      <div className="add-event">
        <h2>Add New Event</h2>
        <div className="date-picker">
          <input
            type="text"
            placeholder="Player "
            style={{ width: "20%", marginRight: "10px" }}
            value={newEvent.player}
            onChange={(e) =>
              setNewEvent({ ...newEvent, player: e.target.value })
            }
          />
          <DatePicker
            placeholderText="Start Date"
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
        </div>
        <button id="addEvent-button" onClick={handleAddEvent}>
          Add Event
        </button>
      </div>
    </div>
  );
}
