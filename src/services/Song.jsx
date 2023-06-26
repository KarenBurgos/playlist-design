import axios from "axios";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const baseURL = "http://localhost:8080/song";

const addSongs = async (title, duration, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const data = {
    title: title,
    duration: duration,
  };

  try {
    const response = await axios.post(baseURL + "/", data, config);
    console.log(response);
    toast.success("Song added!")
    return response;
  } catch (error) {
    console.log("Error:", error);
    throw error;
  }
};

const getSongs = (token, size) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return axios
    .get(baseURL + `/?size=${size}`, config)
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      toast.error("Error");
      if (error.response) {
        console.log("Error:", error.response.data);
      } else {
        console.log("Error:", error.message);
      }
      throw error; // Propagar el error para manejarlo en el componente
    });
};

export { addSongs, getSongs };