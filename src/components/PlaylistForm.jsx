import React, { useState } from 'react';


function PlaylistForm({ onClose, onSubmit }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, description });
    setTitle('');
    setDescription('');
  };

  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-opacity-50 bg-gray-500">
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-bold mb-4 text-purple">Nueva Playlist</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block font-semibold mb-1 text-gray text-sm">Nombre de Playlist:</label>
            <input
              type="text"
              id="title"
              className="border border-gray rounded-md px-2 py-1 w-full "
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block font-semibold mb-1 text-gray text-sm">Descripcion:</label>
            <textarea
              id="description"
              className="border border-gray rounded-md px-2 py-1 w-full"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="flex justify-end">
            <button type="button" className="text-black mr-2 text-sm" onClick={onClose}>Cancelar</button>
            <button type="submit" className="bg-purple text-white hover:bg-middle-purple px-4 py-2 rounded text-sm">Crear</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PlaylistForm;
