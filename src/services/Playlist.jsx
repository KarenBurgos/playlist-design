import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const baseURL = "http://localhost:8080/playlist";
const token = localStorage.getItem("token");

const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const addPlaylist = async (title, description) => {
    const data = {
      title: title,
      description: description
    };
  
    try {
      const response = await axios.post(baseURL + '/', data, config);
      console.log(response);
      return response;
    } catch (error) {
      console.log('Error:', error);
      throw error;
    }
  };
  

const getPlaylists = () => {
    return axios.get(baseURL + '/user', config)
      .then((response) => {
        console.log(response.data.content)
        return response.data.content
      })
      .catch((error) => {
        toast.error("Error")
        if (error.response) {
          console.log('Error:', error.response.data);
        } else {
          console.log('Error:', error.message);
        }
        throw error; // Propagar el error para manejarlo en el componente
      });
  };

export { addPlaylist, getPlaylists };