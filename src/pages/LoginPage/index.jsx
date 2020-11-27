import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import { actions } from "../../redux-store/auth/slice";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./login-page.styles";

function LoginPage() {
  const dispatch = useDispatch();
  const location = useLocation();

  const classes = useStyles();
  const error = location?.state?.error;

  const [credentials, setCredientials] = useState({});

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(actions.authStart(credentials));
  };

  const handleChange = (e) => {
    setCredientials((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <main className={classes.main}>
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        {error && (
          <div>
            <p>{error}</p>
          </div>
        )}
        <Typography variant="h5">Sign In</Typography>
        <form className={classes.form} onSubmit={handleLogin}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input
              id="email"
              name="email"
              autoFocus
              value={credentials.email}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              id="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
            />
          </FormControl>
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="Remember me"
          />
          <Button
            variant="contained"
            type="submit"
            fullWidth
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
        </form>
      </Paper>
    </main>
  );
}

export default LoginPage;
