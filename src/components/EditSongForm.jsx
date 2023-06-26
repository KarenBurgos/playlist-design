import React, { useState } from "react";

function EditSongForm({ onClose, onSubmit }) {
  const [newTitle, setNewTitle] = useState("");
  const [newDuration, setNewDuration] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ newTitle, newDuration });
    setNewTitle("");
    setNewDuration("");
  };

  return (
    <div>
      <div className="fixed z-50 top-0 left-0 w-screen h-screen flex items-center justify-center bg-bg-light bg-opacity-40">
        <div className="bg-white p-4 opacity-100 rounded shadow">
          <form onSubmit={handleSubmit} className="flex flex-col">
            <h2 className="text-xl font-bold mb-4">Editar canción</h2>

            <label htmlFor="title">Nuevo título</label>
            <input
              type="text"
              name="title"
              id="title"
              className="border border-border-gray rounded px-4 py-2"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />

            <label htmlFor="duration">Nueva duración</label>
            <input
              type="text"
              name="duration"
              id="duration"
              className="border border-border-gray rounded px-4 py-2"
              value={newDuration}
              onChange={(e) => setNewDuration(e.target.value)}
            />
            <div className="w-full flex justify-between mt-4">
              <button type="submit" className="bg-purple px-6 py-2 rounded">
                Editar
              </button>
              <button
                type="button"
                onClick={onClose}
                className="bg-border-gray px-6 py-2 rounded"
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditSongForm;
