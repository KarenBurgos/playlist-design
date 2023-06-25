import axios from 'axios';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const baseURL = "http://localhost:8080/playlist/";


const getPlaylistsService = () =>{
    const headers = { 'Authorization': localStorage.getItem('token') };

    axios.get(baseURL, { headers }, {
        params:{
            user: localStorage.getItem('user')
        }
    })
    .then((response) => {
      console.log('Token en response:', response);
      toast.success('Successfully sesion!')
    })
    .catch((error) => {
      toast.error("Usuario no encontrado")
      console.log('Error:', error.message);
    });
}

export {getPlaylistsService};