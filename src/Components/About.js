import React from "react";
import { makeStyles } from "@material-ui/core/styles";
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
  root: {
    flexGrow: 1,
    margin: "30px 10px",
    boxShadow: "none"
  },
  media: {
    height: 140
  },
  button: {
    marginTop: "20px"
  }
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card id={"Kancelaria"} className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h3" component="h3">
            Kancelaria
          </Typography>
          <Typography
            variant="body2"
            // color="textSecondary"
            component="p"
            gutterBottom
          >
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica. They
          </Typography>
          <Typography
            gutterBottom
            variant="body2"
            // color="textSecondary"
            component="p"
          >
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica. They
            should be easy to scan for relevant and actionable information.
            Elements, like text and images, should be placed on them in a way
            that clearly indicates hierarchy.
          </Typography>

          <AnchorLink href={"#Kontakt"}>
            <Link>
              <Button
                className={classes.button}
                variant="outlined"
                color="primary"
              >
                Skontaktuj się z nami
              </Button>
            </Link>
          </AnchorLink>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
