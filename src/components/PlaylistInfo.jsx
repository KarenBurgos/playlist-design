import React, { useState, useEffect } from "react";
import { RiPlayList2Line } from "react-icons/ri";
import Song from "./Song";

import { getPlaylistsWithSongs } from "../services/SongXPlaylist";

function PlaylistInfo({ id, onClose }) {
  const [token, setToken] = useState(localStorage.getItem("token")); // Estado para almacenar el token
  const [playlist, setPlaylist] = useState();

  useEffect(() => {
    if (token) {
      getPlaylistsWithSongs(id, token)
        .then((data) => {
          setPlaylist(data);
        })
        .catch((error) => {
          console.log("Error:", error);
        });
    }
  }, [id, token]); // Dependencia en el token

  return (
    <div key={id} className="ml-5">
        {playlist?.songInfo.map((song) => (
          <Song key={song.code} title={song.title} duration={song.duration} />
        ))}
    </div>
  );
}

export default PlaylistInfo;

