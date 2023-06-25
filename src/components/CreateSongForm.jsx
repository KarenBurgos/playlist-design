import React, { useState } from 'react';

function SongForm({ onClose, onSubmit }) {
  const [title, setTitle] = useState('');
  const [duration, setduration] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, duration });
    setTitle('');
    setduration('');
  };

  return (
    <div className="fixed z-50 top-0 left-0 w-screen h-screen flex items-center justify-center bg-bg-light bg-opacity-40">
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-bold mb-4">Crear Canción</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block font-semibold mb-1">Titulo:</label>
            <input
              type="text"
              id="title"
              className="border border-gray-300 rounded-md px-2 py-1 w-full"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="duration" className="block font-semibold mb-1">Duración:</label>
            <textarea
              id="duration"
              className="border border-gray-300 rounded-md px-2 py-1 w-full"
              value={duration}
              onChange={(e) => setduration(e.target.value)}
            />
          </div>
          <div className="flex justify-end">
            <button type="button" className="text-gray-600 mr-2" onClick={onClose}>Close</button>
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-black px-4 py-2 rounded">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SongForm;
