import React, { useState, useEffect } from 'react';
import Song from "../components/Song";
import { getSongs } from "../services/Song";

import loadMoreImage from '../assets/load-more.png';

function AddSongToPlaylistForm({ onClose, onSubmit, onSongAdded }) {
  const [title, setTitle] = useState('');
  const [size, setSize] = useState(5);
  const [songs, setSongs] = useState([]);
  const [codeSong, setCodeSong] = useState('');
  const [token, setToken] = useState(localStorage.getItem("token")); // Estado para almacenar el token

  const handleClickSong = (code) => {
    onSubmit({ code });
    onSongAdded();
  };

  useEffect(() => {
    try {
      getSongs(token, size, title).then((data) => {
        setSongs(data);
      });
    } catch (error) {
      console.log("Error:", error);
    }
  }, [token, size, title]); // Dependencia en el size

  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-opacity-50 bg-gray-500">
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl text-middle-purple font-bold mb-4">Añadir canción</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="title" className="block font-semibold mb-1 text-middle-purple">Titulo:</label>
            <input
              type="text"
              id="songInput"
              placeholder="Buscar canción"
              className="border border-gray-300 rounded-md px-2 py-1 mr-2"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-4" style={{ maxHeight: '300px', overflowY: 'auto' }}>
            {songs.map((song) => (
              <div key={song.code} onClick={() => handleClickSong(song.code)}>
                <Song id={song.code} title={song.title} duration={song.duration} />
              </div>
            ))}
            <div className="flex items-center justify-end">
              <img src={loadMoreImage} alt="Load more" className="w-10 h-1 px-2 py-2" onClick={() => setSize(size + 10)} />
            </div>
          </div>
          <div className="flex justify-end">
            <button type="button" className="text-gray-600 mr-2" onClick={onClose}>Close</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddSongToPlaylistForm;
