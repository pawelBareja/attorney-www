import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: "30px 0"
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
  button: {
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(2)
    // color: "#fff"
  },
  actionsContainer: {
    // marginBottom: theme.spacing(2)
  },
  resetContainer: {
    padding: theme.spacing(3)
  },
  paper: {
    // padding: theme.spacing(2),
    textAlign: "left",
    // color: theme.palette.text.secondary,
    boxShadow: "none"
  }
  // icon: {
  //   background: "red"
  // }
}));

function getSteps() {
  return ["Opisz swój problem", "Przygotowuje wycene", "Podpisujemy umowe"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `Zadzwońlub napisz do nas wypełniając poniższy formularz, opisz swój problem jak najdokładniej...`;
    case 1:
      return "Przygotujemy dla Ciebie plana działania z propozycha cenowa blabla...";
    case 2:
      return `Uzgodnimy szczegłóy i popdiszemy umowe`;
    default:
      return "Unknown step";
  }
}

export default function VerticalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography className={classes.title} variant="h3" component="h3">
              Jak to działa?
            </Typography>

            <Stepper activeStep={activeStep} orientation="vertical">
              {steps.map((label, index) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                  <StepContent>
                    <Typography>{getStepContent(index)}</Typography>
                    <div className={classes.actionsContainer}>
                      <div>
                        <Button
                          disabled={activeStep === 0}
                          onClick={handleBack}
                          // className={classes.button}
                          variant="outlined"
                          color="inherit"
                          className={classes.button}
                        >
                          Powrót
                        </Button>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={handleNext}
                          className={classes.button}
                          style={{ color: "#fff" }}
                        >
                          {activeStep === steps.length - 1
                            ? "Zakończ"
                            : "następny krok"}
                        </Button>
                      </div>
                    </div>
                  </StepContent>
                </Step>
              ))}
            </Stepper>
            {activeStep === steps.length && (
              <Paper square elevation={0} className={classes.resetContainer}>
                <Typography>To wszystko!</Typography>
                <Button
                  onClick={handleReset}
                  className={classes.button}
                  color="primary"
                  variant="outlined"
                >
                  Jeszcze raz
                </Button>
              </Paper>
            )}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
