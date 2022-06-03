import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from '@apollo/client';
import './Login.css'

import { LOGIN_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';

const LoginForm = () => {
  const [userFormData, setUserFormData] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!(userFormData.email && userFormData.password)) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    try {
      const { data } = await login({
        variables: { ...userFormData }
      });

      Auth.login(data.login.token);
    } catch (err) {
      console.error(err);
    }

    setUserFormData({
      email: '',
      password: '',
    });
  };

  return (
    <div className="App">
        <div className="appAside" />
        <div className="appForm">
      <div className="formCenter">
        <form className="formFields" onSubmit={handleFormSubmit}>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="email">
              E-Mail Address
            </label>
            <input
              type="email"
              id="email"
              className="formFieldInput"
              placeholder="Enter your email"
              name="email"
              value={userFormData.email}
              onChange={handleInputChange}
            />
          </div>

          <div className="formField">
            <label className="formFieldLabel" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="formFieldInput"
              placeholder="Enter your password"
              name="password"
              value={userFormData.password}
              onChange={handleInputChange}
            />
          </div>

          <div className="formField">
            <button className="formFieldButton">Sign In</button>{" "}
            <Link to="/sign-up" className="formFieldLink">
              Create an account
            </Link>
            {error && <div>Incorrect login credentials</div>}
          </div>

        </form>
      </div>
      </div>
      </div>
  );
};

export default LoginForm;