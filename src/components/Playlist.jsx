import React, { useState, useEffect } from "react";
import { RiPlayList2Line } from "react-icons/ri";
import PlaylistInfo from "./PlaylistInfo";

import { getPlaylistsWithSongs } from "../services/SongXPlaylist";
import { Link } from "react-router-dom";

function Playlist({ id, title, description, onClick }) {
  const [showInfo, setShowInfo] = useState(false); // Estado para mostrar/ocultar info
  const [token, setToken] = useState(localStorage.getItem("token")); // Estado para almacenar el token
  const [totalDuration, setTotalDuration] = useState(false);

  const handleInfo = () => {
    setShowInfo(!showInfo);
  };

  useEffect(() => {
    if (token) {
      getPlaylistsWithSongs(id, token)
        .then((data) => {
          setTotalDuration(data.totalDuration);
        })
        .catch((error) => {
          console.log("Error:", error);
        });
    }
  }, [id, token]); // Dependencia en el token

  return (
    <Link to={`/songs/${id}`}>
    <div className="bg-white rounded-lg p-4 mt-3">
      <div
        className="bg-white rounded-lg p-4 flex items-center"
        onClick={handleInfo}
      >
        <RiPlayList2Line className="text-blue-500 text-2xl mr-2" />
        <div key={id}>
          <h2 className="text-lg font-bold">{title}</h2>
          <p className="text-gray-500">{description}</p>
          <p className="text-gray-500">Duración total: {totalDuration}</p>
        </div>
      </div>
    </div>
    </Link>
  );
}

export default Playlist;
