import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const baseURL = "http://localhost:8080/songxplaylist";

const addSongToPlaylist = async (playlistCode, songCode, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const data = {
    playlistCode: playlistCode,
    songCode: songCode,
  };

  try {
    const response = await axios.post(baseURL + `/${playlistCode}/songs/${songCode}`, data, config);
    console.log(response);
    return response;
  } catch (error) {
    console.log("Error:", error);
    throw error;
  }
};

const getPlaylistsWithSongs = (playlistCode, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return axios
    .get(baseURL + `/${playlistCode}/songs-with-date`, config)
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

export { addSongToPlaylist, getPlaylistsWithSongs };