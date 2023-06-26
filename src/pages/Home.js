import React, { useState, useEffect } from "react";
import { RiPlayList2Line, RiMusic2Line } from "react-icons/ri";
import { BiPlusCircle } from "react-icons/bi";
import backgroundTriangle from "../assets/background-decoration-orange.png";
import Song from "../components/Song";
import Playlist from "../components/Playlist";
import { toast, Toaster } from "react-hot-toast";

import PlaylistForm from "../components/PlaylistForm"; // Importamos el formulario playlist
import SongForm from "../components/SongForm"; // Importamos el formulario song

import { addPlaylist, getPlaylists } from "../services/Playlist";
import { addSongs, getSongs } from "../services/Song";

function Home() {
  const [playlists, setPlaylists] = useState([]);
  const [songs, setSongs] = useState([]);

  const [size, setSize] = useState(10);
  const [titlePart, setTitlePart] = useState('');


  const [showPlaylistForm, setShowPlaylistForm] = useState(false); // Estado para mostrar/ocultar el formulario
  const [showSongForm, setShowSongForm] = useState(false); // Estado para mostrar/ocultar el formulario

  const [token, setToken] = useState(localStorage.getItem("token")); // Estado para almacenar el token
  const resetPlaylists = () => {
    setPlaylists([]);
  };

  useEffect(() => {
    if (token) {
      resetPlaylists();
      getPlaylists(token)
        .then((data) => {
          setPlaylists(data);
        })
        .catch((error) => {
          console.log("Error:", error);
        });
    }
  }, [token]); // Dependencia en el token

  useEffect(() => {
    try {
      getSongs(token, size, titlePart).then((data) => {
        setSongs(data);
      });
    } catch (error) {
      console.log("Error:", error);
    }
  }, [token, size, titlePart]); // Dependencia en el size

  const handleAddPlaylist = () => {
    setShowPlaylistForm(true);
  };

  const handleClosePlaylistForm = () => {
    setShowPlaylistForm(false);
  };

  const handleAddSong = () => {
    setShowSongForm(true);
  };

  const handleCloseSongForm = () => {
    setShowSongForm(false);
  };

  const handleSubmitPlaylistForm = async (data) => {
    try {
      const response = await addPlaylist(data.title, data.description, token);
      console.log(response);
      setShowPlaylistForm(false);
      getPlaylists(token)
        .then((data) => {
          setPlaylists(data);
        })
        .catch((error) => {
          console.log("Error:", error);
        });
      
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const handleSubmitSongForm = async (data) => {
    try {
      const response = await addSongs(data.title, data.duration, token);
      console.log(response);
      setShowSongForm(false);
      
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div
      className="h-max bg-orange relative"
      style={{ backgroundImage: `url(${backgroundTriangle})` }}
    >
      <Toaster />
      <div className="container mx-auto p-4 z-40">
        <h1 className="text-2xl font-bold mb-4">Playlists</h1>
        <div id="playlists" className="mb-8">
          <input
            type="text"
            id="playlistInput"
            placeholder="Buscar playlist"
            className="border border-gray-300 rounded-md px-2 py-1 mr-2"
          />
          <button
            className="bg-blue-500 hover:bg-blue-600 text-black px-4 py-2 rounded"
            onClick={handleAddPlaylist} // Manejar clic en el botón "Añadir Playlist"
          >
            <BiPlusCircle className="inline-block mr-2" />
            Añadir Playlist
          </button>
          {playlists.map((playlist) => (
            <Playlist
              id={playlist.code}
              title={playlist.title}
              description={playlist.description}
            />
          ))}
        </div>
        <hr />
        <h1 className="text-2xl font-bold mb-4">Canciones</h1>
        <div id="songs" className="mb-8">
          <input
            type="text"
            id="songInput"
            placeholder="Buscar canción"
            className="border border-gray-300 rounded-md px-2 py-1 mr-2"
            onChange={(e) => setTitlePart(e.target.value)}
          />
          <button
            className="bg-blue-500 hover:bg-blue-600 text-black px-4 py-2 rounded"
            onClick={handleAddSong}
          >
            <BiPlusCircle className="inline-block mr-2" />
            Añadir Canción
          </button>
          {songs.map((song) => (
            <Song id={song.code} title={song.title} duration={song.duration} />
          ))}
          <button
            className="bg-red border-x-orange-dark text-white rounded-lg p-4 mt-3 w-full"
            onClick={(e) => {
              e.preventDefault();
              setSize(size + 10);
            }}
          >
            Cargar más
          </button>
        </div>
        {showPlaylistForm && ( // Mostrar el formulario si showPlaylistForm es verdadero
          <PlaylistForm
            onClose={handleClosePlaylistForm}
            onSubmit={handleSubmitPlaylistForm}
          />
        )}
        {showSongForm && ( // Mostrar el formulario si showSongForm es verdadero
          <SongForm
            onClose={handleCloseSongForm}
            onSubmit={handleSubmitSongForm}
          />
        )}
      </div>
    </div>
  );
}

export default Home;
