import React from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  Typography,
  Button,
  FormControl,
  TextField,
  FormHelperText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
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
    marginBottom: 40,
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

const AccountForm = ({ type, handleSubmit, formErrorMessage }) => {
  const classes = useStyles();
  return (
    <form onSubmit={handleSubmit}>
      <Grid className={classes.form} container justifyContent="center">
        <Grid item xs={12}>
          <Typography className={classes.title}>
            {type === "login" ? "Welcome back!" : "Create an account."}
          </Typography>
        </Grid>
        {type === "register" ? (
          <Grid item xs={12}>
            <FormControl fullWidth required>
              <TextField
                aria-label="username"
                label="Username"
                name="username"
                type="text"
              />
            </FormControl>
          </Grid>
        ) : null}
        <Grid item xs={12}>
          <FormControl fullWidth required>
            <TextField
              aria-label="email"
              label="E-mail address"
              name="email"
              type="email"
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth required>
            <TextField
              label="Password"
              aria-label="password"
              type="password"
              name="password"
              InputProps={
                type === "login"
                  ? {
                      endAdornment: (
                        <Link
                          className={classes.link}
                          href="/login"
                          to="/login"
                        >
                          <Typography className={classes.forgot}>
                            Forgot?
                          </Typography>
                        </Link>
                      ),
                    }
                  : {}
              }
            />
          </FormControl>
        </Grid>
        {type === "register" ? (
          <Grid item xs={12}>
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
        ) : null}
        <Button
          className={type === "login" ? classes.button : null}
          type="submit"
          variant="contained"
          color="primary"
          size="large"
        >
          {type === "login" ? "Login" : "Create"}
        </Button>
      </Grid>
    </form>
  );
};

export default AccountForm;
