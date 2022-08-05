// Utilities
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { GiAmericanFootballPlayer } from "react-icons/gi";
import { FaChartLine } from "react-icons/fa";
import { MdSportsCricket } from "react-icons/md";
import { TbSoccerField } from "react-icons/tb";
import { ApplicationContext } from "../contexts/ApplicationContext";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LogoutIcon from "@mui/icons-material/Logout";

export default function TemporaryDrawer() {
  const { showDrawer, setShowDrawer, setApplicationData } =
    React.useContext(ApplicationContext);

  const navigate = useNavigate();

  const toggleDrawer = () => {
    setShowDrawer(false);
  };

  return (
    <div>
      <React.Fragment>
        <Drawer anchor={"left"} open={showDrawer} onClose={toggleDrawer}>
          <Box
            className="box"
            sx={{ width: 300 }}
            role="presentation"
            onClick={toggleDrawer}
            onKeyDown={toggleDrawer}
          >
            <List>
              {["Dashboard", "Players", "Fields", "Equipment"].map(
                (text, index) => (
                  <ListItem
                    className="drawer-tab"
                    style={{ marginTop: 10 }}
                    key={text}
                    disablePadding
                  >
                    <ListItemButton
                      onClick={() =>
                        navigate(
                          text === "Players"
                            ? "players"
                            : text === "Fields"
                            ? "fields"
                            : text === "Equipment"
                            ? "equipment"
                            : "/"
                        )
                      }
                    >
                      <ListItemIcon>
                        {text === "Players" ? (
                          <GiAmericanFootballPlayer
                            className="icon"
                            size={25}
                          />
                        ) : text === "Fields" ? (
                          <TbSoccerField className="icon" size={25} />
                        ) : text === "Dashboard" ? (
                          <FaChartLine className="icon" size={25} />
                        ) : (
                          <MdSportsCricket className="icon" size={25} />
                        )}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItemButton>
                  </ListItem>
                )
              )}
            </List>
            <List>
              <Divider style={{ backgroundColor: "white", borderWidth: 1.5 }} />
              <ListItem className="drawer-tab" disablePadding>
                <ListItemButton
                  onClick={() => {
                    localStorage.clear();
                    setApplicationData();
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
