import axios from 'axios';
import { useState } from 'react';

const UserService = (username, password, setToken) => {
  const baseURL = "http://localhost:8080/auth";

  const data = {
    username: username,
    password: password
  };

  axios.post(baseURL + '/login', data)
    .then((response) => {
      setToken(response.data.token);
      console.log('Token:', response.data.token);
    })
    .catch((error) => {
      console.log('Error:', error);
    });
};

export { UserService };

