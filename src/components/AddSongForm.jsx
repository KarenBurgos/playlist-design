import React, { useState } from 'react';
import SongFilter from './SongFilter';

function AddSongForm({ onClose, onSubmit, playlistId }) {
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
        <h2 className="text-xl font-bold mb-4">Añadir canción a playlist</h2>
        <SongFilter id_playlist={playlistId}/>
      </div>
    </div>
  );
}

export default AddSongForm;
