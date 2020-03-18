import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles({
  footer: {
    background: "#444",
    color: "#fff",
    // borderRadius: "10px",
    padding: "10px",
    // margin: "-8px",
    borderRadius: "4px"
  },
  root: {
    flexGrow: 1,
    padding: "30px 20px",

    boxShadow: "none",
    background: "#444"
  },
  title: {
    margin: "10px 0 20px 0",
    wordWrap: "break-word",
    position: "relative",
    color: "#fff",
    "&::before": {
      content: "''",
      display: "block",
      position: "absolute",
      height: "2px",
      width: "60px",
      left: "30px",
      transform: "translateX(-50%)",
      bottom: "-5px",
      background: "#00c2ff"
    }
  }
});

export default function Footer() {
  const classes = useStyles();

  return (
    <div container className={classes.footer}>
      <Grid id={"Kancelaria"} className={classes.root}>
        <Grid item md={4}>
          <Typography className={classes.title} variant="body2" component="p">
            <strong>Firma</strong>
          </Typography>
          <Typography
            gutterBottom
            variant="body2"
            component="p"
            style={{ color: "#fff" }}
          >
            Nip: 555 555 555
          </Typography>
          <Typography
            gutterBottom
            variant="body2"
            component="p"
            style={{ color: "#fff" }}
          >
            KRS: 1234 567 890
          </Typography>
          <Typography
            gutterBottom
            variant="body2"
            component="p"
            style={{ color: "#fff" }}
          >
            KRS: 1234 567 890
          </Typography>
        </Grid>

        <Grid item md={4}>
          <Typography className={classes.title} variant="body2" component="p">
            <strong>Kontakt</strong>
          </Typography>
          <Typography
            gutterBottom
            variant="body2"
            component="p"
            style={{ color: "#fff" }}
          >
            05-820 Warszawa
          </Typography>
          <Typography
            gutterBottom
            variant="body2"
            component="p"
            style={{ color: "#fff" }}
          >
            Tel.: 555 555 555
          </Typography>
          <Typography
            gutterBottom
            variant="body2"
            component="p"
            style={{ color: "#fff" }}
          >
            Email: pawel@wpfesfs.pl
          </Typography>
        </Grid>
        <Grid item style={{ marginTop: "30px" }}>
          <Link to="#" variant="body2">
            Made by bareja.ai
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}
