import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const baseURL = "http://localhost:8080/song/";
const token = localStorage.getItem("token");


const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const createSong = async (title, duration) => {
    const data = {
      title: title,
      duration: duration
    };
  
    try {
      const response = await axios.post(baseURL , data, config);
      console.log(response);
      toast.success('Cancion creada con exito')
      return response;
    } catch (error) {
        toast.error("Error")
      console.log('Error:', error);
      throw error;
    }
  };


  const getSong = async (title) => {
    return axios.get(baseURL + title, config)
      .then((response) => {
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
  }

  const deleteSong = (title) => {
    axios.delete(baseURL + title, config)
      .then(() =>{
        toast.success('Eliminado con exito')
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
  }

export { createSong, getSong, deleteSong};