import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import ImageIcon from "@material-ui/icons/Image";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Link from "@material-ui/core/Link";
import { Typography } from "@material-ui/core";

const icons = [
  {
    icon: <PlayCircleOutlineIcon />
  },
  {
    icon: <AssignmentIndIcon />
  },
  {
    icon: <FlightTakeoffIcon />
  },
  {
    icon: <LocalOfferIcon />
  },
  {
    icon: <ImageIcon />
  }
];

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  },
  nav: {
    position: "fixed",
    top: "0",
    left: "0"
  },
  button: {
    margin: "10px 20px",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "100",
    "&::after": {
      content: "'MENU'",
      display: "block",
      position: "absolute",

      // height: "2px",
      // width: "60px",
      left: "10px",
      // transform: "translateX(-50%)",
      bottom: "-12px"
      // background: "#00c2ff"
    }
  }
});

export default function SwipeableTemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    // top: false,
    // left: false,
    // bottom: false,
    left: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {["Start", "Kancelaria", "Oerta", "Jak to działa", "cosstam"].map(
          (text, index) => (
            <ListItem button key={text}>
              <AnchorLink href={"#" + text}>
                <ListItemIcon>{icons[index].icon}</ListItemIcon>
                <Link>
                  <ListItemText primary={text} />
                </Link>
              </AnchorLink>
            </ListItem>
          )
        )}
      </List>

      <Divider />

      <List>
        {["Kontakt"].map((text, index) => (
          <ListItem button key={text}>
            <AnchorLink href="#Kontakt">
              <Link>
                <ListItemText primary={text} />
              </Link>
            </AnchorLink>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.nav}>
      <Button className={classes.button} onClick={toggleDrawer("left", true)}>
        <MenuIcon style={{ fontSize: "50px" }} />
        {/* <Typography variant="h3" component="h3">
          Menu
        </Typography> */}
      </Button>

      <SwipeableDrawer
        anchor="left"
        open={state.left}
        onClose={toggleDrawer("left", false)}
        onOpen={toggleDrawer("left", true)}
      >
        {sideList("left")}
      </SwipeableDrawer>
    </div>
  );
}
