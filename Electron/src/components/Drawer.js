import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LogoutIcon from "@mui/icons-material/Logout";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SportsVolleyballIcon from "@mui/icons-material/SportsVolleyball";
import { useNavigate } from "react-router-dom";
import { GiAmericanFootballPlayer } from "react-icons/gi";
import { ApplicationContext } from "../contexts/ApplicationContext";

export default function TemporaryDrawer() {
  const navigate = useNavigate();
  const { showDrawer, setShowDrawer, setApplicationData } =
    React.useContext(ApplicationContext);
  const toggleDrawer = () => {
    setShowDrawer(false);
  };

  return (
    <div>
      <React.Fragment>
        <Drawer anchor={"left"} open={showDrawer} onClose={toggleDrawer}>
          <Box
            sx={{ width: 300 }}
            role="presentation"
            onClick={toggleDrawer}
            onKeyDown={toggleDrawer}
          >
            <List>
              {["Players", "Fields", "Equipment"].map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton
                    onClick={() =>
                      navigate(
                        text === "Players"
                          ? "/"
                          : text === "Fields"
                          ? "fields"
                          : "equipment"
                      )
                    }
                  >
                    <ListItemIcon>
                      {text === "Players" ? (
                        <GiAmericanFootballPlayer />
                      ) : text === "Fields" ? (
                        <GiAmericanFootballPlayer />
                      ) : (
                        <GiAmericanFootballPlayer />
                      )}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider />
            <List>
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => {
                    localStorage.clear();
                    setApplicationData(null);
                  }}
                >
                  <ListItemIcon>
                    <LogoutIcon color="error" />
                  </ListItemIcon>
                  <ListItemText primary={"Sign Out"} />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </React.Fragment>
    </div>
  );
}
