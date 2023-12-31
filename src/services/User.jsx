import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const baseURL = "http://localhost:8080/auth";

const loginService = (username, password) => {
  return new Promise((resolve, reject) => {
  const data = {
    username: username,
    password: password
  };

  axios.post(baseURL + '/login', data) 
    .then((response) => {
      console.log(data)
      const token = response.data.token;
      localStorage.setItem('token', token); // Guardar el token en localStorage
      console.log('Token:', token);
      console.log('Token en response:', response.data.token);
      toast.success('Successfully sesion!')
      resolve()

    })
    .catch((error) => {
      toast.error("Usuario no encontrado")
      console.log('Error:', error.response.data);
      reject(error);
    });
  })
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
      toast.success('Successfully created!')
    })
    .catch((error) => {
      if(error.response.data.password){
        toast.error(`Error: ${ error.response.data.password[0]}`);
        console.log('Error:', error.response.data.password[0]);
      } else{
        toast.error(`Error: ${ error.response.data.message}`);
        console.log('Error:', error.response.data.message);
      }
    });
};

export { loginService, signupService };

