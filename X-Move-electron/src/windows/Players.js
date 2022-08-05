// Utilities
import React, { useContext } from "react";
import { ApplicationContext } from "../contexts/ApplicationContext";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export default function Players() {
  const { applicationData } = useContext(ApplicationContext);

  return (
    <>
      <h1 className="players-header">Players</h1>
      <div className="players-window">
        {applicationData.players &&
          applicationData.players
            .filter((player) => player.admin === 0)
            .map((player) => (
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="250"
                  src={`http://192.168.1.3:4000` + player.pictureURL}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {player.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {player.about}
                    <br />
                    {player.sports.map((sport) => (
                      <Stack
                        style={{
                          display: "inline",
                          margin: 5,
                        }}
                        direction="row"
                        spacing={1}
                      >
                        <Chip label={sport} variant="outlined" />
                      </Stack>
                    ))}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">View Profile</Button>
                  <Button
                    style={{ color: "red", fontWeight: "bold" }}
                    size="small"
                  >
                    Block
                  </Button>
                </CardActions>
              </Card>
            ))}
      </div>
    </>
  );
}
