import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: "30px 20px"
  },
  title: {
    margin: "50px 10px",
    wordWrap: "break-word",
    position: "relative",
    "&::before": {
      content: "''",
      display: "block",
      position: "absolute",
      height: "2px",
      width: "60px",
      left: "50%",
      transform: "translateX(-50%)",
      bottom: "-20px",
      background: "#00c2ff"
    }
  },
  form: {
    width: "100%",
    margin: "10px 0",
    borderRadius: "15px"
  }
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <>
      <div id="kontakt" className={classes.root}>
        <Typography
          gutterBottom
          variant="h3"
          component="h3"
          className={classes.title}
        >
          Kontakt
        </Typography>
        <Typography
          gutterBottom
          variant="body2"
          component="p"
          style={{ textAlign: "center", marginBottom: "50px" }}
        >
          Wypełnij formularz, skontaktujemy się z Wami w ciągu dwóch dni
          roboczych. Napisz już dziś!
        </Typography>
        <Grid container spacing={0} justify="center">
          <Grid item md={10}>
            <form noValidate autoComplete="off">
              <TextField
                className={classes.form}
                // id="outlined-basic"
                label="Imię & Nazwisko"
                variant="outlined"
              />
              <TextField
                className={classes.form}
                // id="outlined-basic"
                label="Numer Telefonu"
                variant="outlined"
              />
              <TextField
                className={classes.form}
                // id="outlined-basic"
                label="Email"
                variant="outlined"
              />
              <TextField
                className={classes.form}
                // id="standard-multiline-static"
                label="Napisz wiadomość.."
                multiline
                rows="4"
                variant="outlined"
              />

              <FormControlLabel
                control={<Checkbox value="checkedB" color="primary" />}
                label="Akceptuję politykę prywatności"
              />
            </form>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
