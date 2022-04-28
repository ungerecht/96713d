import React from "react";
import { Link } from "react-router-dom";
import { Grid, Box, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import SideBanner from "./SideBanner";
import AccountForm from "./AccountForm";

const useStyles = makeStyles((theme) => ({
  account: {
    flex: 1,
    minHeight: "90vh",
    [theme.breakpoints.up("mobile")]: {
      padding: "20px 22px",
    },
    [theme.breakpoints.up("mobileLg")]: {
      padding: "30px 42px",
    },
  },
  text: {
    color: theme.palette.secondary.main,
    fontSize: 14,
    fontWeight: 400,
    [theme.breakpoints.up("mobile")]: {
      marginRight: 10,
    },
    [theme.breakpoints.up("tablet")]: {
      marginRight: 30,
    },
  },
}));

const LandingPage = ({ type, handleSubmit, formErrorMessage }) => {
  const classes = useStyles();
  const opposite = type === "login" ? "register" : "login";

  return (
    <Grid container justifyContent="center">
      <SideBanner />
      <Box className={classes.account}>
        <Grid container item justifyContent="flex-end" alignItems="center">
          <Typography className={classes.text}>
            {type === "login" ? "Don't" : "Already"} have an account?
          </Typography>
          <Link href={`/${opposite}`} to={`/${opposite}`}>
            <Button variant="contained" color="default">
              {type === "login" ? "Create account" : "Login"}
            </Button>
          </Link>
        </Grid>
        <AccountForm
          type={type}
          handleSubmit={handleSubmit}
          formErrorMessage={formErrorMessage}
        />
      </Box>
    </Grid>
  );
};

export default LandingPage;
