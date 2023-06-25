import React, { useState, useEffect } from 'react';
import { getSong, getSongs } from '../services/SongService';
import axios from 'axios';

function SongFilter() {
  const [searchTerm, setSearchTerm] = useState('');
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
const searchHandler = async () => {
  try{
    const response = await getSong(searchTerm);
    setSongs(response);
  } catch (error) {
    setError('Error fetching song');
  }
  }


  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        className="w-full border rounded px-3 py-1 border-border-gray"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={searchHandler}>Search</button>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && (

        
        <ul>
          <h2>{songs.title}</h2>
          <h2>{songs.duration}</h2>
           {/* {songs.map((song) => (
             <li key={song.code}>{song.title} {song.duration}</li>
           ))} */}
        </ul>
      )}
    </div>
  );
}

export default SongFilter;
