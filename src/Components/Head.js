import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import image from "../images/tlo3.jpg";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: "0 10px"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  headTop: {
    height: "calc(60vh - 60px)",
    marginTop: "44px",
    borderRadius: "4px",
    // background: "#009efd",
    // backgroundImage: `url(${image})`,
    background: `url(${image})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
    // border: "1px solid red"
  },
  leftHead: {
    width: "30vw",
    height: "65vh",
    backgroundColor: "#75DDDD",
    opacity: "0.8",
    position: "relative",
    borderRadius: "4px 0 4px 4px"
  },
  greenBox: {
    position: "absolute",
    bottom: "10px",
    left: "10px",
    color: "#fff"
    // "&::after": {
    //   content: `''`,
    //   position: "absolute",
    //   left: "0",
    //   top: "0",
    //   width: "0",
    //   height: "0",
    //   border: "50px solid transparent",
    //   borderTopColor: "red"
    // }
  }

  //   headBottom: {
  //     height: "50vh"
  //     border: "1px solid blue"
  //   }
}));

const Head = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <div className={classes.headTop}>
              <div className={classes.leftHead}>
                <Typography
                  variant="h6"
                  component="h2"
                  className={classes.greenBox}
                >
                  Paweł Sterna
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div>
              <Typography
                variant="h4"
                component="h2"
                style={{ marginTop: "120px" }}
              >
                Radca Prawny
              </Typography>
              <Typography variant="h6" component="h2">
                Paweł Sterna
              </Typography>
            </div>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>xs=6</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>xs=6</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>xs=3</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>xs=3</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>xs=3</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>xs=3</Paper>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Head;
