import React, { useContext, useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import API from "../api";
import { UserContext } from "../contexts/UserContext";
import moment from "moment";
import CalendarDialog from "../components/CalendarDialog";

const localizer = momentLocalizer(moment);

export default function OwnerCalendar() {
  const [newEvent, setNewEvent] = useState({ player: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState([]);
  const [showDialog, setShowDialog] = useState(false);
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
            title: `${event.player} reservation`,
            start: new Date(event.start),
            end: new Date(event.end),
          };
        });
        console.log(fetchedEvents);
        setAllEvents([...fetchedEvents]);
      } catch (error) {
        alert("Reservations couldn't be fetched !!");
        console.log(error.message);
      }
    };
    getReservations();
  }, []);

  const handleSelect = (e) => {
    setNewEvent({
      ...newEvent,
      start: e.start,
      end: e.end,
    });
    setShowDialog(true);
  };

  const handleAddEvent = async () => {
    setShowDialog(false);
    if (newEvent.player === "") {
      alert("Please Fill all the fields");
      return;
    }
    try {
      await API.post(
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
        popup={true}
        onSelectSlot={handleSelect}
        selectable={true}
        localizer={localizer}
        startAccessor="start"
        endAccessor="end"
        events={allEvents}
        style={{ height: 500, margin: "50px" }}
      />
      <CalendarDialog
        setShowDialog={setShowDialog}
        showDialog={showDialog}
        newEvent={newEvent}
        setNewEvent={setNewEvent}
        handleAddEvent={handleAddEvent}
      />
    </div>
  );
}
