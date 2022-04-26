import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
  FormHelperText,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import SideBanner from './components/SideBanner';
import { theme } from './themes/theme';

const useStyles = makeStyles(() => ({
  signup: {
    flex: 1,
    padding: '30px 42px',
    alignContent: 'space-between',
  },
  form: {
    marginTop: '54px',
    marginLeft: '5.4vw',
    width: '37vw',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 600,
    fontSize: '26px',
    lineHeight: '40px',
    marginBottom: '20px',
  },
  text: {
    color: `${theme.palette.secondary.main}`,
    fontSize: 14,
    fontWeight: 400,
    marginRight: '30px',
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
      setFormErrorMessage({ confirmPassword: 'Passwords must match' });
      return;
    }
    await register({ username, email, password });
  };

  useEffect(() => {
    if (user && user.id) history.push('/home');
  }, [user, history]);

  return (
    <Grid container justifyContent="center">
      <SideBanner />
      <Box className={classes.signup}>
        <Grid container item justifyContent="flex-end" alignItems="center">
          <Typography className={classes.text}>
            Already have an account?
          </Typography>
          <Link href="/login" to="/login" style={{ textDecoration: 'none' }}>
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
              <FormControl fullWidth>
                <TextField
                  InputLabelProps={{
                    required: false,
                  }}
                  aria-label="username"
                  label="Username"
                  name="username"
                  type="text"
                  required
                />
              </FormControl>
            </Grid>
            <Grid xs={12}>
              <FormControl fullWidth>
                <TextField
                  InputLabelProps={{
                    required: false,
                  }}
                  label="E-mail address"
                  aria-label="e-mail address"
                  type="email"
                  name="email"
                  required
                />
              </FormControl>
            </Grid>
            <Grid xs={12}>
              <FormControl fullWidth error={!!formErrorMessage.confirmPassword}>
                <TextField
                  InputLabelProps={{
                    required: false,
                  }}
                  aria-label="password"
                  label="Password"
                  type="password"
                  inputProps={{ minLength: 6 }}
                  name="password"
                  required
                />
                <FormHelperText>
                  {formErrorMessage.confirmPassword}
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid xs={12}>
              <FormControl fullWidth error={!!formErrorMessage.confirmPassword}>
                <TextField
                  InputLabelProps={{
                    required: false,
                  }}
                  label="Confirm Password"
                  aria-label="confirm password"
                  type="password"
                  inputProps={{ minLength: 6 }}
                  name="confirmPassword"
                  required
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
