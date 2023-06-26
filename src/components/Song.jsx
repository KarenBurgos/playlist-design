import React, { useState, useEffect } from "react";
import { RiMusic2Line, RiEditBoxLine, RiDeleteBin2Line } from "react-icons/ri";
import { deleteSong, editSong } from "../services/SongService";
import EditSongForm from "./EditSongForm";
import { deleteSongFromPlaylist } from "../services/SongXPlaylist";

function Song({ title, duration, code }) {
  const [showIcons, setShowIcons] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [showDeleteForm, setShowDeleteForm] = useState(false);

  function onMouseOver() {
    setShowIcons(true);
  }
  function onMouseLeave() {
    setShowIcons(false);
  }

  function Delete(typeDelete) {
    if (typeDelete === 1) {
      deleteSong(title);
    } else if (typeDelete === 2) {
      // deleteSongFromPlaylist() //TODO: obtener codigo de la cancion
    }
  }

  function showForm() {
    setShowEditForm(true);
  }

  const handleCloseForm = () => {
    setShowEditForm(false);
  };

  function showFormDelete() {
    setShowDeleteForm(true);
  }

  const handleSubmitForm = (data) => {
    editSong(title, data.newTitle, data.newDuration);
  };

  return (
    <div
      className="bg-white opacity-75 rounded-lg p-4 flex justify-between items-center mt-3 hover:opacity-100"
      onMouseOver={onMouseOver}
      onMouseOut={onMouseLeave}
    >
      <div className="flex">
        <RiMusic2Line className="text-blue-500 text-2xl mr-2" />
        <div>
          <h2 className="text-lg font-bold">{title}</h2>
          <p className="text-gray-500">Duración: {duration} minutos</p>
        </div>
      </div>
      {showIcons && (
        <div className="flex">
          <RiEditBoxLine
            className="text-blue-500 text-2xl mr-2"
            onClick={showForm}
          />
          <RiDeleteBin2Line
            className="text-blue-500 text-2xl mr-2"
            onClick={showFormDelete}
          />
        </div>
      )}
      {showEditForm && (
        <EditSongForm onClose={handleCloseForm} onSubmit={handleSubmitForm} />
      )}
      {showDeleteForm && (
        <div className="fixed z-50 top-0 left-0 w-screen h-screen flex items-center justify-center bg-bg-light bg-opacity-40">
          <h1 className="text-purple-dark text-xl font-bold">Elimnar cancion</h1>
          <div className="bg-white p-4 rounded shadow flex flex-col">
            <button
              className=" px-8 py-2 rounded"
              onClick={() => Delete(1)} // Envolver console.log en una función de flecha
            >
              Borrar permanentemente
            </button>
            <button
              className="px-8 py-2 rounded"
              onClick={() => Delete(2)} // Envolver console.log en una función de flecha
            >
              Borrar de la playlist
            </button>
            <button
              className="bg-bg-light text-white px-8 py-2 rounded"
              onClick={() => setShowDeleteForm(false)}
            >
              Cancelar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Song;
