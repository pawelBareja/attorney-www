import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
// import image from "../images/przezroczyste.png";
import { Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import image1 from "../images/oferta1.jpg";
import image2 from "../images/oferta1.jpg";
import image3 from "../images/oferta1.jpg";
import image4 from "../images/oferta1.jpg";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    partialVisibilityGutter: 40
  }
};

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    margin: "30px 10px"
  },
  slide: {
    border: "1px solid red",
    width: "230px",
    margin: "0 20px"
  },
  // root: {
  //   maxWidth: 345
  // },
  media: {
    height: 140
  }
});

export default function MediaCard() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={0}>
          <Grid item xs={12} id={"Oferta"}>
            <Typography variant="h3" component="h3">
              Oferta
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Carousel responsive={responsive}>
              <div className={classes.slide}>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={image1}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Lizard
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Zapytaj
                    </Button>
                  </CardActions>
                </Card>
              </div>
              <div className={classes.slide}>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={image2}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Lizard
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Zapytaj
                    </Button>
                  </CardActions>
                </Card>
              </div>
              <div>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={image2}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Lizard
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Zapytaj
                    </Button>
                  </CardActions>
                </Card>
              </div>
              <div>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={image2}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Lizard
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Zapytaj
                    </Button>
                  </CardActions>
                </Card>
              </div>
              <div>
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={image3}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Lizard
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Zapytaj
                    </Button>
                  </CardActions>
                </Card>
              </div>
              <div>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={image4}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Lizard
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Zapytaj
                    </Button>
                  </CardActions>
                </Card>
              </div>
            </Carousel>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
