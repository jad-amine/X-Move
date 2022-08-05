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
  console.log(applicationData.fields);

  return (
    <>
      <h1 className="dashboard-header">Equipment</h1>
      <div className="players-window">
        {applicationData.fields
          .filter((field) => field.property === "Equipments")
          .map((field) => (
            <Card key={field.name} sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="250"
                src={`http://192.168.1.3:4000/` + field.pictureURL}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  {field.name}
                  <Stack direction="row">
                    <Chip label={field.sport} />
                  </Stack>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {field.email}
                  <br />
                  {field.number}
                  <br />
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">View Field</Button>
                <Button
                  style={{ color: "red", fontWeight: "bold" }}
                  size="small"
                >
                  Delete
                </Button>
              </CardActions>
            </Card>
          ))}
      </div>
    </>
  );
}
