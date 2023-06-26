import React, { useState, useEffect } from 'react';
import { addSongToPlaylist } from '../services/SongXPlaylist';
import { getSong } from '../services/SongService';
import axios from 'axios';

function SongFilter(id_playlist) {
  const [searchTerm, setSearchTerm] = useState('');
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
const searchHandler = async () => {
  try{
    const response = await getSong(searchTerm);
    setSongs(response);
  } catch (error) {
    console.log(error)
    setError('Error fetching song');
  }
  }

  const addSong = () => {
    addSongToPlaylist(id_playlist.id_playlist, songs.code)
  }

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        className="w-full border rounded px-3 py-1 border-border-gray"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className='bg-purple-dark text-white px-8 py-2 rounded' onClick={searchHandler}>Search</button>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && (

        
        <ul onClick={addSong}>
          <h2>{songs.title}</h2>
          <h2>{songs.duration}</h2>
        </ul>
      )}
    </div>
  );
}

export default SongFilter;
