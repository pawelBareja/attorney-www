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
    "& > *": {
      margin: theme.spacing(1),
      width: "100%"
    }
  }
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <>
      <Typography gutterBottom variant="h5" component="h2">
        Kancelaria
      </Typography>
      <Typography gutterBottom variant="p" component="p">
        Wypełnij formularz, skontaktujemy się z Wami w ciągu dwóch dni roboczycg
      </Typography>
      <Grid container spacing={0} justify="center">
        <Grid item md={10}>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              id="outlined-basic"
              label="Imię & Nazwisko"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Numer Telefonu"
              variant="outlined"
            />
            <TextField id="outlined-basic" label="Email" variant="outlined" />
            <TextareaAutosize
              aria-label="minimum height"
              rowsMin={8}
              placeholder="Napisz wiadomość"
            />
            <FormControlLabel
              value="start"
              control={<Checkbox color="primary" />}
              label="Start"
              labelPlacement="start"
            />
          </form>
        </Grid>
      </Grid>
    </>
  );
}
