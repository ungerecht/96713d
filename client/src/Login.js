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
    marginTop: '54px',
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
    fontSize: '26px',
    lineHeight: '40px',
    marginBottom: '40px',
  },
  text: {
    color: theme.palette.secondary.main,
    fontSize: 14,
    fontWeight: 400,
    [theme.breakpoints.up('mobile')]: {
      marginRight: '10px',
    },
    [theme.breakpoints.up('tablet')]: {
      marginRight: '30px',
    },
  },
  button: {
    marginTop: '20px',
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
              Register
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
                  label="Password"
                  aria-label="password"
                  type="password"
                  name="password"
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
