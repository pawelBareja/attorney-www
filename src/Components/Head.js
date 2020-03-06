import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import image from "../images/pokrywanie2.jpg";
import imageBig from "../images/1600x900.jpg";
import { Typography } from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import chevron from "../images/chevron.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: "-8px"
  },
  head: {
    height: "100vh",
    background: `url(${imageBig})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  },
  headTop: {
    margin: "60px 28px",
    color: "#fff",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  headBottom: {
    position: "absolute",
    bottom: "100px",
    left: "0",
    color: "#fff",
    margin: "0 28px",
    padding: "10px 0 20px 0",
    borderBottom: "3px solid #fff"
  },
  scroll: {
    // width: "50px",
    // height: "50px",
    // background: "#fff",
    // border: "none",
    position: "absolute",
    bottom: "0",
    left: "50%",
    transform: "translateX(-50%)",
    borderRadius: "4px 4px 0 0",
    color: "rgba(1,1,1,0.1)"
  }
}));

const Head = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={0} className={classes.head}>
          <Grid item xs={12}>
            <div className={classes.headTop}></div>
          </Grid>
          <Grid item xs={12}>
            <div className={classes.headBottom}>
              <Typography variant="overline" component="h2">
                Paweł Sterna
              </Typography>
              <Typography variant="h1" component="h1">
                Radca
              </Typography>
              <Typography
                variant="h1"
                component="h1"
                style={{ fontWeight: "600" }}
              >
                Prawny
              </Typography>
            </div>
          </Grid>
          <AnchorLink href="#oferta">
            <img src={chevron} alt="chevron" className={classes.scroll} />
          </AnchorLink>
        </Grid>
      </div>
    </>
  );
};

export default Head;
