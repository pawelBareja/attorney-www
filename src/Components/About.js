import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AnchorLink from "react-anchor-link-smooth-scroll";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    margin: "30px 20px",
    boxShadow: "none"
  },
  title: {
    margin: "80px 10px 50px",
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
  media: {
    height: 140
  }
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card id={"kancelaria"} className={classes.root}>
      <Typography className={classes.title} variant="h3" component="h3">
        Dlaczego My?
      </Typography>
      <Typography variant="body2" component="p" gutterBottom>
        <strong>
          Here are many variations of passages of Lorem Ipsum available, but the
          majority have suffered alteration in some form, by injected humour, or
          randomised words which don't look even slightly believable. If you are
          going to use a passage of Lorem Ipsum, you need to be sure there isn't
          anything embarrassing hidden in the middle of text.
        </strong>
      </Typography>
      <Typography gutterBottom variant="body2" component="p">
        Here are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which don't look even slightly believable. If you are
        going to use a passage of Lorem Ipsum, you need to be sure there isn't
        anything embarrassing hidden in the middle of text. All the Lorem Ipsum
        generators on the Internet tend to repeat predefined chunks as
        necessary, making this the first true generator on the Internet. It uses
        a dictionary of over 200 Latin words, combined with a handful of model
        sentence structures, to generate Lorem Ipsum which looks reasonable.
      </Typography>

      <AnchorLink href={"#kontakt"} style={{ textDecoration: "none" }}>
        {/* <Link> */}
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          style={{ color: "#fff", marginTop: "20px" }}
        >
          Skontaktuj się ze mną
        </Button>
        {/* </Link> */}
      </AnchorLink>
    </Card>
  );
}
