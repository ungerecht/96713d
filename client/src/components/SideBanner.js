import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import bgImg from "../images/bg-img.png";
import bubble from "../images/bubble.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    justifySelf: "flex-start",
    background: `url(${bgImg}), linear-gradient(180deg, #3A8DFF 0%, #86B9FF 100%)`,
    backgroundBlendMode: "multiply",
    backgroundRepeat: "no-repeat",
    mixBlendMode: "normal",
    backgroundSize: "cover",
    opacity: 0.85,
    [theme.breakpoints.up("mobile")]: {
      width: "100%",
      minHeight: "75vh",
    },
    [theme.breakpoints.up("tablet")]: {
      width: "40%",
      minHeight: "100vh",
    },
  },
  text: { marginTop: "28vh" },
  title: {
    color: "white",
    fontSize: 26,
    fontWeight: "400, Regular",
    lineHeight: "39.5px",
    marginTop: 40,
    textAlign: "center",
  },
}));

const SideBanner = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="flex-start"
        className={classes.text}
      >
        <img className={classes.chat} src={bubble} alt="Chat bubble icon" />
        <Typography className={classes.title}>
          Converse with anyone
          <br /> with any language
        </Typography>
      </Grid>
    </Box>
  );
};

export default SideBanner;
