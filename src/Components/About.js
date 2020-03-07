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
    margin: "30px 20px",
    boxShadow: "none"
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
  media: {
    height: 140
  }
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card id={"Kancelaria"} className={classes.root}>
      <Typography className={classes.title} variant="h3" component="h3">
        Dlaczego My?
      </Typography>
      <Typography variant="body2" component="p" gutterBottom>
        <strong>
          Nadzwyczajna skuteczność działań prawnych. Obsługa osób fizycznych i
          firm. Prawo cywilne. Prawo pracy. Prawo karne Rozwód. Prawo rodzinne.
          Odszkodowania. Prawo gospodarcze. Usługi: Pozyskiwanie dowodów
        </strong>
      </Typography>
      <Typography gutterBottom variant="body2" component="p">
        Nadzwyczajna skuteczność działań prawnych. Obsługa osób fizycznych i
        firm. Prawo cywilne. Prawo pracy. Prawo karne. Rozwód. Prawo rodzinne.
        Odszkodowania. Prawo gospodarcze. Usługi: Pozyskiwanie dowodów,
        Obserwacje osobowe, Windykacja, Sprawy gospodarcze.Nadzwyczajna
        skuteczność działań prawnych. Obsługa osób fizycznych i firm. Prawo
        cywilne. Prawo pracy. Prawo karne. Rozwód. Prawo rodzinne.
        Odszkodowania. Prawo gospodarcze. Usługi: Pozyskiwanie dowodów,
        Obserwacje osobowe, Windykacja, Sprawy gospodarcze.
      </Typography>

      <AnchorLink href={"#kontakt"} style={{ textDecoration: "none" }}>
        <Link>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            style={{ color: "#fff", marginTop: "20px" }}
          >
            Skontaktuj się z nami
          </Button>
        </Link>
      </AnchorLink>
    </Card>
  );
}
