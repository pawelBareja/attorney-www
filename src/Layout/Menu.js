import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Typography } from "@material-ui/core";

const menu = [
  {
    name: "Oferta",
    id: "#oferta"
  },
  {
    name: "Kancelaria",
    id: "#kancelaria"
  },
  {
    name: "Jak to działa?",
    id: "#jakDziala"
  }
];

const useStyles = makeStyles({
  list: {
    width: 250,
    paddingTop: "80px"
  },
  fullList: {
    width: "auto"
  },
  nav: {
    position: "absolute",
    top: "0",
    left: "0"
  },
  link: {
    textDecoration: "none"
  },
  button: {
    margin: "10px 20px",
    color: "#fff",
    fontSize: "14px",
    fontWeight: "100",
    "&::after": {
      content: "'MENU'",
      display: "block",
      position: "absolute",
      left: "15px",
      bottom: "-12px"
    }
  }
});

export default function SwipeableTemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
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
        {menu.map(item => (
          <ListItem button key={item.id}>
            <AnchorLink className={classes.link} href={item.id}>
              <Typography color="primary" variant="h6" component="p">
                {item.name}
              </Typography>
            </AnchorLink>
          </ListItem>
        ))}
      </List>

      <Divider />

      <List>
        {["Kontakt"].map((text, index) => (
          <ListItem button key={text}>
            <AnchorLink className={classes.link} href={"#kontakt"}>
              <Typography color="primary" variant="h6" component="p">
                {text}
              </Typography>
            </AnchorLink>
            <ListItemIcon>
              <MailIcon color="primary" style={{ marginLeft: "20px" }} />
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
        <div
          style={{
            position: "absolute",
            left: "0",
            bottom: "0",
            margin: "0 0 50px 16px",
            color: "rgba(0, 194, 255, 0.5)"
          }}
        >
          <Typography variant="h2" component="p">
            Anna
          </Typography>
          <Typography variant="h2" component="p" style={{ fontWeight: "600" }}>
            Kowal
          </Typography>
        </div>
      </SwipeableDrawer>
    </div>
  );
}
