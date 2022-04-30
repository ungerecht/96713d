import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import LandingPage from "./components/LandingPage";

const Login = ({ user, login }) => {
  const history = useHistory();

  const handleLogin = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    const username = formElements.email.value;
    const password = formElements.password.value;

    await login({ username, password });
  };

  useEffect(() => {
    if (user && user.id) history.push("/home");
  }, [user, history]);

  return <LandingPage type="login" handleSubmit={handleLogin} />;
};

export default Login;
