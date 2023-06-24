import axios from 'axios';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const baseURL = "http://localhost:8080/auth";

const loginService = (username, password) => {
  const data = {
    username: username,
    password: password
  };

  axios.post(baseURL + '/login', data)
    .then((response) => {
      const token = response.data.token;
      localStorage.setItem('token', token); // Guardar el token en localStorage
      console.log('Token:', token);
      console.log('Token en response:', response.data.token);
      toast.success('Successfully sesion!')

    })
    .catch((error) => {
      toast.error("Usuario no encontrado")
      console.log('Error:', error.response.data);
    });
};

const signupService = (username, password, email) => {
  const data = {
    username: username,
    password: password,
    email: email
  };

  axios.post(baseURL + '/signup', data)
    .then((response) => {
      console.log(response)
      toast.success('Successfully sesion!')

    })
    .catch((error) => {
      console.log('Error:', error.response.data);
    });
};

export { loginService, signupService };

