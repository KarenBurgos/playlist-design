import React, { useState, useEffect } from "react";
import { RiPlayList2Line } from "react-icons/ri";
import PlaylistInfo from "./PlaylistInfo";
import { PiMusicNotesPlusBold } from "react-icons/pi";
import { getPlaylistsWithSongs, addSongToPlaylist } from "../services/SongXPlaylist";
import AddSongToPlaylistForm from "./AddSongToPlaylistForm";

function Playlist({ id, title, description, onClick }) {
  const [showInfo, setShowInfo] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [totalDuration, setTotalDuration] = useState(false);
  const [showIcons, setShowIcons] = useState(false);
  const [showAddSongForm, setShowAddSongForm] = useState(false);
  const [songAdded, setSongAdded] = useState(false);

  const handleSongAdded = () => {
    setSongAdded(!songAdded);
  };

  function onMouseOver() {
    setShowIcons(true);
  }

  function onMouseLeave() {
    setShowIcons(false);
  }

  function handleShowForm() {
    setShowAddSongForm(true);
  }

  const handleCloseForm = () => {
    setShowAddSongForm(false);
  };

  const handleInfo = () => {
    setShowInfo(!showInfo);
  };

  const handleSubmitForm = async (data) => {
    try {
      const response = await addSongToPlaylist(id, data.code, token);
      console.log(response);
      setShowAddSongForm(false);
      handleSongAdded(); // Llama a la función handleSongAdded
    } catch (error) {
      console.log("Error:", error);
    }
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
  }, [id, token, songAdded]); // Dependencia en el token

  return (
    <div className="bg-pastel-pink rounded-lg p-4 mt-3">
      <div
        className="bg-pastel-pink rounded-lg p-4 flex items-center justify-between"
        onClick={handleInfo}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseLeave}
      >
        <div className="flex items-center">
          <RiPlayList2Line className="text-blue-500 text-2xl mr-5" />
          <div key={id}>
            <h2 className="text-lg font-bold">{title}</h2>
            <p className="text-gray-500">{description}</p>
            <p className="text-gray-500">Duración total: {totalDuration}</p>
          </div>
        </div>
        {showIcons && (
          <div className="flex">
            <PiMusicNotesPlusBold
              className="text-blue-500 text-2xl mx-2 ml-4 cursor-pointer"
              onClick={handleShowForm}
            />
          </div>
        )}
        {showAddSongForm && (
          <AddSongToPlaylistForm onClose={handleCloseForm} onSubmit={handleSubmitForm} onSongAdded={handleSongAdded} />
        )}
      </div>
      {showInfo && <PlaylistInfo id={id} onSongAdded={handleSongAdded} />}
    </div>
  );
}

export default Playlist;
