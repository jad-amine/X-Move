// Utilities
import * as React from "react";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

// Styling
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

export default function TemporaryDrawer() {
  const { showDrawer, setShowDrawer, setUser } = React.useContext(UserContext);
  const navigate = useNavigate();

  const toggleDrawer = () => {
    setShowDrawer(false);
  };

  return (
    <div>
      <React.Fragment>
        <Drawer anchor={"right"} open={showDrawer} onClose={toggleDrawer}>
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer}
            onKeyDown={toggleDrawer}
          >
            <List>
              {["Property", "Calendar"].map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton
                    onClick={() =>
                      navigate(index % 2 === 0 ? "propertyInfo" : "/")
                    }
                  >
                    <ListItemIcon>
                      {index % 2 === 0 ? (
                        <SportsVolleyballIcon color="success" />
                      ) : (
                        <CalendarMonthIcon color="primary" />
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
                    setUser(null);
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
