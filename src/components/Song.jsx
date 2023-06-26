import React, { useState, useEffect } from "react";
import { RiMusic2Line, RiEditBoxLine, RiDeleteBin2Line } from "react-icons/ri";
import { deleteSong, editSong } from "../services/SongService";
import EditSongForm from "./EditSongForm";

function Song({ title, duration }) {
  const [showIcons, setShowIcons] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);

  function onMouseOver() {
    setShowIcons(true);
  }
  function onMouseLeave() {
    setShowIcons(false);
  }

  function Delete() {
    deleteSong(title);
  }

  function showForm() {
    setShowEditForm(true);
  }

  const handleCloseForm = () => {
    setShowEditForm(false);
  };

  const handleSubmitForm = (data) => {
    editSong(title, data.newTitle, data.newDuration);
  };

  return (
    <div
      className="bg-white opacity-75 rounded-lg p-4 flex justify-between items-center mt-3 hover:opacity-100"
      onMouseOver={onMouseOver}
      onMouseOut={onMouseLeave}
    >
      <div class="flex">
        <RiMusic2Line className="text-blue-500 text-2xl mr-2" />
        <div>
          <h2 className="text-lg font-bold">{title}</h2>
          <p className="text-gray-500">Duración: {duration} minutos</p>
        </div>
      </div>
      {showIcons && (
        <div class="flex">
          <RiEditBoxLine
            className="text-blue-500 text-2xl mr-2"
            onClick={showForm}
          />
          <RiDeleteBin2Line
            className="text-blue-500 text-2xl mr-2"
            onClick={Delete}
          />
        </div>
      )}
      {showEditForm && (
        <EditSongForm onClose={handleCloseForm} onSubmit={handleSubmitForm} />
      )}
    </div>
  );
}

export default Song;
