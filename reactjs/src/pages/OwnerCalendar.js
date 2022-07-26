import React, { useContext, useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import API from "../api";
import { UserContext } from "../contexts/UserContext";
import moment from "moment";
import CalendarDialog from "../components/CalendarDialog";
import { v4 as uuidv4 } from "uuid";
import EventDialog from "../components/EventDialog";

const DragAndDropCalendar = withDragAndDrop(Calendar);
const localizer = momentLocalizer(moment);

export default function OwnerCalendar() {
  const [newEvent, setNewEvent] = useState({ player: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState([]);
  const [showDialog, setShowDialog] = useState(false);
  const [showEventDialog, setShowEventDialog] = useState(false);
  const [reschedule, setReschedule] = useState(false);
  const [rescheduledEvent, setRescheduledEvent] = useState(false);
  const [eventToDelete, setEventToDelete] = useState(false);
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
      id: uuidv4(),
    });
    setShowDialog(true);
  };

  const handleEventSelect = (e) => {
    setEventToDelete(e);
    setShowEventDialog(true);
  };

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
      console.log(error);
    }
  };

  const handleEventChange = (e) => {
    setShowEventDialog(true);
    setReschedule(true);
    setRescheduledEvent(e);
  };

  return (
    <div className="calendar-form">
      <h1 className="align-center">Calendar</h1>
      <DragAndDropCalendar
        popup={true}
        onSelectSlot={handleSelect}
        selectable={true}
        localizer={localizer}
        startAccessor="start"
        endAccessor="end"
        events={allEvents}
        style={{ height: 500, margin: "50px" }}
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
