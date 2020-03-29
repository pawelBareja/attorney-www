import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import axios from "axios";

export default class Form extends Component {
  state = {
    name: "",
    phone: "",
    email: "",
    message: "",
    consent: false,
    correct: false,
    error: {
      name: false,
      phone: false,
      email: false,
      message: false,
      consent: false
    }
  };

  handleChange = e => {
    const name = e.target.name;

    if (e.target.name === "consent") {
      this.setState({
        consent: !this.state.consent
      });
    } else {
      this.setState({
        [name]: e.target.value
      });
    }
  };

  validateFields() {
    let name = false,
      email = false,
      phone = false,
      message = false,
      consent = false,
      correct = false;

    if (this.state.name.length > 0) {
      name = true;
    }
    if (this.state.phone.length > 0) {
      phone = true;
    }
    if (this.state.message.length > 0) {
      message = true;
    }
    if (this.state.email.indexOf("@") !== -1) {
      email = true;
    }
    if (this.state.consent) {
      consent = true;
    }
    if (name && phone && email && message && consent) {
      correct = true;
    }

    return {
      name,
      phone,
      message,
      email,
      consent,
      correct
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const correctSubmission = this.validateFields();

    if (correctSubmission.correct) {
      // sending email start
      const { name, phone, message, email } = this.state;

      axios({
        method: "post",
        url: "https://yourAddress/folderNameWithPHPmailer/index.php",
        params: {
          name: name,
          phone: phone,
          email: email,
          message: message
        },
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
      // sending email stop

      this.setState({
        name: "",
        phone: "",
        email: "",
        message: "",
        consent: false,
        correct: true,
        error: {
          name: false,
          phone: false,
          email: false,
          message: false,
          consent: false
        }
      });
    } else {
      this.setState({
        error: {
          name: !correctSubmission.name,
          phone: !correctSubmission.phone,
          email: !correctSubmission.email,
          message: !correctSubmission.message,
          consent: !correctSubmission.consent
        }
      });
    }
  };

  componentDidUpdate() {
    if (this.state.correct) {
      setTimeout(() => this.setState({ correct: false }), 3000);
    }
  }

  render() {
    const style = {
      thankyou: {
        borderRadius: "10px",
        background: "green",
        color: "#fff",
        textAlign: "center",
        padding: "10px"
      },
      error: {
        color: "red"
      }
    };
    const { name, phone, email, message, consent, correct, error } = this.state;

    return (
      <>
        <div id="kontakt" style={{ width: "calc(100%-40px)", margin: "20px" }}>
          <Typography gutterBottom variant="h3" component="h3">
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
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            style={{ marginBottom: "50px" }}
          >
            <form noValidate autoComplete="off" style={{ width: "100%" }}>
              <Grid item md={12} style={{ margin: "20px 0" }}>
                <TextField
                  fullWidth={true}
                  label="Imię & Nazwisko"
                  variant="outlined"
                  value={name}
                  name="name"
                  onChange={this.handleChange}
                />
                {error.name && (
                  <Typography
                    gutterBottom
                    variant="body2"
                    component="p"
                    style={style.error}
                  >
                    Uzupełnij to pole
                  </Typography>
                )}
              </Grid>

              <Grid item md={12} style={{ margin: "20px 0" }}>
                <TextField
                  fullWidth={true}
                  label="Numer Telefonu"
                  variant="outlined"
                  value={phone}
                  name="phone"
                  onChange={this.handleChange}
                />
                {error.phone && (
                  <Typography
                    gutterBottom
                    variant="body2"
                    component="p"
                    style={style.error}
                  >
                    Uzupełnij to pole
                  </Typography>
                )}
              </Grid>
              <Grid item md={12} style={{ margin: "20px 0" }}>
                <TextField
                  fullWidth={true}
                  label="Email"
                  variant="outlined"
                  value={email}
                  name="email"
                  onChange={this.handleChange}
                />
                {error.email && (
                  <Typography
                    gutterBottom
                    variant="body2"
                    component="p"
                    style={style.error}
                  >
                    Podaj poprawny adres email
                  </Typography>
                )}
              </Grid>
              <Grid item md={12} style={{ margin: "20px 0" }}>
                <TextField
                  fullWidth={true}
                  label="Napisz wiadomość.."
                  multiline
                  rows="4"
                  variant="outlined"
                  value={message}
                  name="message"
                  onChange={this.handleChange}
                />
                {error.message && (
                  <Typography
                    gutterBottom
                    variant="body2"
                    component="p"
                    style={style.error}
                  >
                    Uzupełnij to pole
                  </Typography>
                )}
              </Grid>
              <Grid item md={12} style={{ margin: "20px 0" }}>
                <FormControlLabel
                  fullWidth={true}
                  control={<Checkbox value={consent} color="primary" />}
                  label="Akceptuję politykę prywatności"
                  value={consent}
                  name="consent"
                  onChange={this.handleChange}
                />
                {error.consent && (
                  <Typography
                    gutterBottom
                    variant="body2"
                    component="p"
                    style={style.error}
                  >
                    Zgoda jest wymagana
                  </Typography>
                )}
              </Grid>
              <Grid item md={12} style={{ margin: "20px 0" }}>
                <Button
                  type="submit"
                  onClick={this.handleSubmit}
                  variant="contained"
                  color="primary"
                  style={{ color: "#fff", marginTop: "10px" }}
                >
                  Skontaktuj się z nami
                </Button>
              </Grid>
              {correct && (
                <Grid item md={12} style={{ margin: "10px 0" }}>
                  <Typography
                    gutterBottom
                    variant="body2"
                    component="p"
                    style={style.thankyou}
                  >
                    Wiadomość została wysłana, odezwiemy się wkrótce
                  </Typography>
                </Grid>
              )}
            </form>
          </Grid>
        </div>
      </>
    );
  }
}
