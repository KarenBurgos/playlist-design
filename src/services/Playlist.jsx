import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const baseURL = "http://localhost:8080/playlist";

const addPlaylist = async (title, description, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const data = {
    title: title,
    description: description,
  };

  try {
    const response = await axios.post(baseURL + "/", data, config);
    console.log(response);
    toast.success("Playlist added!")
    return response;
  } catch (error) {
    console.log("Error:", error);
    throw error;
  }
};

const getPlaylists = (token, titlePart) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return axios
    .get(baseURL + `/user?titlePart=${titlePart}`, config)
    .then((response) => {
      console.log(response.data.content);
      return response.data.content;
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

export { addPlaylist, getPlaylists };
