import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import SideBanner from './components/SideBanner';

const useStyles = makeStyles((theme) => ({
  account: {
    flex: 1,
    [theme.breakpoints.up('mobile')]: {
      padding: '20px 22px',
    },
    [theme.breakpoints.up('tablet')]: {
      padding: '30px 42px',
    },
  },
  form: {
    marginTop: 54,
    [theme.breakpoints.up('mobile')]: {
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    [theme.breakpoints.up('tablet')]: {
      marginLeft: '5.4vw',
      width: '37vw',
    },
  },
  title: {
    fontWeight: 600,
    fontSize: 26,
    lineHeight: '40px',
    marginBottom: 40,
  },
  text: {
    color: theme.palette.secondary.main,
    fontSize: 14,
    fontWeight: 400,
    [theme.breakpoints.up('mobile')]: {
      marginRight: 10,
    },
    [theme.breakpoints.up('tablet')]: {
      marginRight: 30,
    },
  },
  button: {
    marginTop: 20,
  },
  forgot: {
    fontSize: 12,
    fontWeight: 600,
    color: theme.palette.primary.main,
    padding: 5,
  },
}));

const Login = ({ user, login }) => {
  const history = useHistory();
  const classes = useStyles();

  const handleLogin = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    const username = formElements.username.value;
    const password = formElements.password.value;

    await login({ username, password });
  };

  useEffect(() => {
    if (user && user.id) history.push('/home');
  }, [user, history]);

  return (
    <Grid container justifyContent="center">
      <SideBanner />
      <Box className={classes.account}>
        <Grid container item justifyContent="flex-end" alignItems="center">
          <Typography className={classes.text}>
            Don't have an account?
          </Typography>
          <Link
            href="/register"
            to="/register"
            style={{ textDecoration: 'none' }}
          >
            <Button variant="contained" color="default">
              Create account
            </Button>
          </Link>
        </Grid>
        <form onSubmit={handleLogin}>
          <Grid className={classes.form} container justifyContent="center">
            <Grid xs={12}>
              <Typography className={classes.title}>Welcome back!</Typography>
            </Grid>
            <Grid xs={12}>
              <FormControl fullWidth required>
                <TextField
                  aria-label="email"
                  label="E-mail address"
                  name="email"
                  type="email"
                />
              </FormControl>
            </Grid>
            <Grid xs={12}>
              <FormControl fullWidth required>
                <TextField
                  label="Password"
                  aria-label="password"
                  type="password"
                  name="password"
                  InputProps={{
                    endAdornment: (
                      //TODO: link to forgot password page
                      <Link
                        href="/login"
                        to="/login"
                        style={{ textDecoration: 'none' }}
                      >
                        <Typography className={classes.forgot}>
                          Forgot?
                        </Typography>
                      </Link>
                    ),
                  }}
                />
              </FormControl>
            </Grid>
            <Button
              className={classes.button}
              type="submit"
              variant="contained"
              color="primary"
              size="large"
            >
              Login
            </Button>
          </Grid>
        </form>
      </Box>
    </Grid>
  );
};

export default Login;
