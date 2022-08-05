// Utilities
import API from "../api";
import moment from "moment";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import "react-datepicker/dist/react-datepicker.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";

// Components
import CalendarDialog from "../components/CalendarDialog";
import EventDialog from "../components/EventDialog";
import { Calendar, momentLocalizer } from "react-big-calendar";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";

const DragAndDropCalendar = withDragAndDrop(Calendar);
const localizer = momentLocalizer(moment);

export default function OwnerCalendar() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [newEvent, setNewEvent] = useState({ player: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState([]);
  const [showDialog, setShowDialog] = useState(false);
  const [showEventDialog, setShowEventDialog] = useState(false);
  const [reschedule, setReschedule] = useState(false);
  const [rescheduledEvent, setRescheduledEvent] = useState(false);
  const [eventToDelete, setEventToDelete] = useState(false);

  useEffect(() => {
    // Fetch property reservations
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
        setAllEvents([...fetchedEvents]);
      } catch (error) {
        alert("Reservations couldn't be fetched !!");
      }
    };
    getReservations();
  }, []);

  // Add 30 min Reservation
  const handleSelect = (e) => {
    setNewEvent({
      ...newEvent,
      start: e.start,
      end: e.end,
      id: uuidv4(),
    });
    setShowDialog(true);
  };

  // Add custom Reservation
  const handleAddEvent = async () => {
    setShowDialog(false);
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
    }
  };

  // Delete Reservation
  const handleEventSelect = (e) => {
    setEventToDelete(e);
    setShowEventDialog(true);
  };

  // Reschedule Reservation
  const handleEventChange = (e) => {
    setShowEventDialog(true);
    setReschedule(true);
    setRescheduledEvent(e);
  };

  if (!user.info.property) {
    navigate("../propertyInfo");
  }

  return (
    <div className="calendar-form">
      <h1 className="calendar-header">Calendar</h1>
      <DragAndDropCalendar
        popup={true}
        onSelectSlot={handleSelect}
        selectable={true}
        localizer={localizer}
        startAccessor="start"
        endAccessor="end"
        events={allEvents}
        className="calendar"
        style={{ height: 500 }}
        onSelectEvent={handleEventSelect}
        onEventDrop={handleEventChange}
        onEventResize={handleEventChange}
      />
      <CalendarDialog
        setShowDialog={setShowDialog}
        showDialog={showDialog}
        newEvent={newEvent}
        setNewEvent={setNewEvent}
        handleAddEvent={handleAddEvent}
      />
      <EventDialog
        showEventDialog={showEventDialog}
        setShowEventDialog={setShowEventDialog}
        eventToDelete={eventToDelete}
        setEventToDelete={setEventToDelete}
        user={user}
        setAllEvents={setAllEvents}
        allEvents={allEvents}
        reschedule={reschedule}
        rescheduledEvent={rescheduledEvent}
      />
    </div>
  );
}
