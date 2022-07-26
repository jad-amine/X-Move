import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import API from "../api";

export default function EventDialog({
  showEventDialog,
  setShowEventDialog,
  eventToDelete,
  user,
  setAllEvents,
  allEvents,
}) {
  const handleClose = () => {
    setShowEventDialog(false);
  };

  const handleDelete = async () => {
    console.log(eventToDelete);
    setShowEventDialog(false);
    try {
      const { data } = await API.get("deleteReservation/" + eventToDelete.id, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      setShowEventDialog(false);
      setAllEvents(allEvents.filter((event) => event.id !== eventToDelete.id));
    } catch (error) {
      console.log(error, error.message);
    }
  };
  if (eventToDelete) {
    return (
      <div>
        <Dialog open={showEventDialog} onClose={handleClose}>
          <DialogTitle>{eventToDelete.player} Reservations</DialogTitle>
          <DialogContent>
            <DialogContentText>
              <p>From:</p> {eventToDelete.start.toString().slice(0, 21)}
              <p style={{ margin: 20 }}></p>
              <p>Till:</p> {eventToDelete.end.toString().slice(0, 21)}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button style={{ color: "red" }} onClick={handleDelete}>
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
