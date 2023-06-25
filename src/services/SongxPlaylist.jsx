import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const baseURL = "http://localhost:8080/songxplaylist/";
const token = localStorage.getItem("token");

const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

//   const addSong = async (title, description) => {
//     const data = {
//       title: title,
//       description: description
//     };
  
//     try {
//       const response = await axios.post(baseURL + '/', data, config);
//       console.log(response);
//       return response;
//     } catch (error) {
//       console.log('Error:', error);
//       throw error;
//     }
//   };
  

const getSongs = (code) => {
    return axios.get(baseURL + code +'/songs-with-date', config)
      .then((response) => {
        console.log(response.data)
        console.log(response.data.totalDuration)
        console.log(response.data.songInfo)
        return response.data
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

export { getSongs };