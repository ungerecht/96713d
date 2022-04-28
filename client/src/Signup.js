import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
  FormHelperText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import SideBanner from "./components/SideBanner";

const useStyles = makeStyles((theme) => ({
  account: {
    flex: 1,
    minHeight: "90vh",
    [theme.breakpoints.up("mobile")]: {
      padding: "20px 22px",
    },
    [theme.breakpoints.up("tablet")]: {
      padding: "30px 42px",
    },
  },
  form: {
    marginTop: 54,
    [theme.breakpoints.up("mobile")]: {
      marginLeft: "auto",
      marginRight: "auto",
    },
    [theme.breakpoints.up("tablet")]: {
      marginLeft: "5.4vw",
      width: "37vw",
    },
  },
  title: {
    fontWeight: 600,
    fontSize: 26,
    lineHeight: "40px",
    marginBottom: 20,
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

const Signup = ({ user, register }) => {
  const history = useHistory();
  const classes = useStyles();

  const [formErrorMessage, setFormErrorMessage] = useState({});

  const handleRegister = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    const username = formElements.username.value;
    const email = formElements.email.value;
    const password = formElements.password.value;
    const confirmPassword = formElements.confirmPassword.value;

    if (password !== confirmPassword) {
      setFormErrorMessage({ confirmPassword: "Passwords must match" });
      return;
    }
    await register({ username, email, password });
  };

  useEffect(() => {
    if (user && user.id) history.push("/home");
  }, [user, history]);

  return (
    <Grid container justifyContent="center">
      <SideBanner />
      <Box className={classes.account}>
        <Grid container item justifyContent="flex-end" alignItems="center">
          <Typography className={classes.text}>
            Already have an account?
          </Typography>
          <Link href="/login" to="/login" style={{ textDecoration: "none" }}>
            <Button variant="contained" color="default">
              Login
            </Button>
          </Link>
        </Grid>
        <form onSubmit={handleRegister}>
          <Grid className={classes.form} container justifyContent="center">
            <Grid xs={12}>
              <Typography className={classes.title}>
                Create an account.
              </Typography>
            </Grid>
            <Grid xs={12}>
              <FormControl fullWidth required>
                <TextField
                  aria-label="username"
                  label="Username"
                  name="username"
                  type="text"
                />
              </FormControl>
            </Grid>
            <Grid xs={12}>
              <FormControl fullWidth required>
                <TextField
                  label="E-mail address"
                  aria-label="e-mail address"
                  type="email"
                  name="email"
                />
              </FormControl>
            </Grid>
            <Grid xs={12}>
              <FormControl
                fullWidth
                required
                error={!!formErrorMessage.confirmPassword}
              >
                <TextField
                  aria-label="password"
                  label="Password"
                  type="password"
                  inputProps={{ minLength: 6 }}
                  name="password"
                />
                <FormHelperText>
                  {formErrorMessage.confirmPassword}
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid xs={12}>
              <FormControl
                fullWidth
                required
                error={!!formErrorMessage.confirmPassword}
              >
                <TextField
                  label="Confirm Password"
                  aria-label="confirm password"
                  type="password"
                  inputProps={{ minLength: 6 }}
                  name="confirmPassword"
                />
                <FormHelperText>
                  {formErrorMessage.confirmPassword}
                </FormHelperText>
              </FormControl>
            </Grid>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
            >
              Create
            </Button>
          </Grid>
        </form>
      </Box>
    </Grid>
  );
};

export default Signup;
