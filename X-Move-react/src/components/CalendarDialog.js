import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function CalendarDialog({
  showDialog,
  setShowDialog,
  newEvent,
  handleAddEvent,
  setNewEvent,
}) {
  const handleClose = () => {
    setShowDialog(false);
  };

  return (
    <div>
      <Dialog
        open={showDialog}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Confirm reservation date ?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <p>From:</p> {newEvent.start.toString().slice(0, 21)}
            <p style={{ margin: 20 }}></p>
            <p>Till:</p> {newEvent.end.toString().slice(0, 21)}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            required
            label="Player Name"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) =>
              setNewEvent({
                ...newEvent,
                player: e.target.value,
                title: e.target.value,
              })
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            disabled={newEvent.player === ""}
            onClick={handleAddEvent}
            autoFocus
          >
            Add Reservation
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
