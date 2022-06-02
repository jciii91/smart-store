import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from '@apollo/client';
import './SignUp.css'

import { ADD_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';

const SignupForm = () => {
  // set initial form state
  const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '', hasAgreed: false });
  const [addUser, { error }] = useMutation(ADD_USER);

  const handleInputChange = (event) => {
    if (event.target.name === 'hasAgreed') {
      const { name } = event.target;
      setUserFormData({ ...userFormData, [name]: event.target.checked });
    } else {
      const { name, value } = event.target;
      setUserFormData({ ...userFormData, [name]: value });
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (userFormData.hasAgreed === false) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    try {
      const { data } = await addUser({
        variables: { ...userFormData }
      });

      Auth.login(data.addUser.token);
    } catch (err) {
      console.error(err);
    }

    setUserFormData({
      username: '',
      email: '',
      password: '',
      hasAgreed: false
    });
  };

  return (
    <div className="App">
        <div className="appAside" />
        <div className="appForm">
      <div className="formCenter">
        <form onSubmit={handleFormSubmit} className="formFields">
          <div className="formField">
            <label className="formFieldLabel" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="formFieldInput"
              placeholder="Enter your full name"
              name="username"
              value={userFormData.username}
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
            <label className="formFieldCheckboxLabel">
              <input
                className="formFieldCheckbox"
                type="checkbox"
                name="hasAgreed"
                checked={userFormData.hasAgreed}
                onChange={handleInputChange}
              />{" "}
              I agree all statements in{" "}
              <a href="null" className="formFieldTermsLink">
                terms of service
              </a>
            </label>
          </div>

          <div className="formField">
            <button className="formFieldButton">Sign Up</button>{" "}
            <Link to="/login" className="formFieldLink">
              I'm already member
            </Link>
            {error && <div>Sign up failed</div>}
          </div>
        </form>
      </div>
      </div>
      </div>
  );
};

export default SignupForm;