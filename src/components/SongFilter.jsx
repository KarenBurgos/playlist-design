import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SongFilter() {
  const [searchTerm, setSearchTerm] = useState('');
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchSongs = async () => {
      if (!searchTerm) {
        setSongs([]);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        const response = await axios.get(`http://localhost:8080/song/${searchTerm}`, config);
        console.log(response.data);
        
        const data = Array.isArray(response.data) ? response.data : [response.data];
        setSongs(data);
      } catch (error) {
        setError('Error fetching songs');
      } finally {
        setLoading(false);
      }
    };

    fetchSongs();
  }, [searchTerm, token]);


  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        className="w-full border rounded px-3 py-1 border-border-gray"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button >Search</button>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && (
        <ul>
          {songs.map((song) => (
            <li key={song.code}>{song.title} {song.duration}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SongFilter;
