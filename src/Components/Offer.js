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

import img1 from "../images/klotnia.jpg";
import img2 from "../images/plane.jpg";
import img3 from "../images/car.jpg";
import img4 from "../images/klotnia.jpg";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const useStyles = makeStyles({
  root: {
    margin: "10px"
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

  slide: {
    width: "90%",
    height: "auto",
    margin: "10px",
    borderRadius: "25px",
    overflow: "hidden",
    boxShadow: "0px 0px 7px 1px rgba(189,189,189,1)"
  },
  media: {
    // width: "380px",
    height: "230px"
  },
  cardContent: {
    position: "absolute",
    right: "10px",
    bottom: "0",
    color: "#fff"
  }
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <>
      <div id="oferta" className={classes.root}>
        <Grid container spacing={0}>
          <Grid item xs={12} id={"Oferta"}>
            <Typography className={classes.title} variant="h3" component="h3">
              W czym pomagamy?
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Carousel
              additionalTransfrom={0}
              arrows
              autoPlaySpeed={3000}
              centerMode={false}
              className=""
              containerClass="container"
              dotListClass=""
              draggable
              focusOnSelect={false}
              infinite
              itemClass=""
              keyBoardControl
              minimumTouchDrag={80}
              partialVisible
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
              removeArrowOnDeviceType="mobile"
              responsive={{
                desktop: {
                  breakpoint: {
                    max: 3000,
                    min: 1024
                  },
                  items: 3,
                  partialVisibilityGutter: 40
                },
                mobile: {
                  breakpoint: {
                    max: 464,
                    min: 0
                  },
                  items: 1,
                  partialVisibilityGutter: 30
                },
                tablet: {
                  breakpoint: {
                    max: 1024,
                    min: 464
                  },
                  items: 2,
                  partialVisibilityGutter: 30
                }
              }}
              showDots={false}
              sliderClass=""
              slidesToSlide={1}
              swipeable
            >
              <Card className={classes.slide}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={img1}
                    alt="Contemplative Reptile"
                  />

                  <Typography
                    className={classes.cardContent}
                    gutterBottom
                    variant="h5"
                    component="h2"
                  >
                    Sprawy rodzinne
                  </Typography>
                </CardActionArea>
              </Card>

              <Card className={classes.slide}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={img2}
                    alt="Contemplative Reptile"
                  />

                  <Typography
                    className={classes.cardContent}
                    gutterBottom
                    variant="h5"
                    component="h2"
                  >
                    Reklamacje
                  </Typography>
                </CardActionArea>
              </Card>

              <Card className={classes.slide}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={img3}
                    alt="Contemplative Reptile"
                  />

                  <Typography
                    className={classes.cardContent}
                    gutterBottom
                    variant="h5"
                    component="h2"
                  >
                    Odszkodowania
                  </Typography>
                </CardActionArea>
              </Card>
            </Carousel>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
