import React, { useState } from 'react';
import SongFilter from './SongFilter';

function AddSongForm({ onClose, onSubmit }) {
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
        <SongFilter/>
        {/* <form>
          <input type="text" name="search" id="search" placeholder='buscar canción' className='w-full border rounded px-3 py-1 border-border-gray' />
          
          <div className="flex justify-end">
            <button type="button" className="text-gray-600 mr-2" onClick={onClose}>Close</button>
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-black px-4 py-2 rounded">Submit</button>
          </div>
        </form> */}
      </div>
    </div>
  );
}

export default AddSongForm;
