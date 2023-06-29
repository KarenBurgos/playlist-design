import React, { useState, useEffect } from "react";
import Playlist from "../components/Playlist";
import { toast, Toaster } from "react-hot-toast";
import { Link, Outlet } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { Input } from 'antd';

import waves from "../assets/waves-home.png";
import headphones from "../assets/headphones.png";
import image from '../assets/music.png'

import PlaylistForm from "../components/PlaylistForm"; // Importamos el formulario playlist
import { addPlaylist, getPlaylists } from "../services/Playlist";


function Home() {
  const [playlists, setPlaylists] = useState([]);
  const [titlePartPlaylist, setTitlePartPlaylist] = useState('');
  const [expandedPlaylist, setExpandedPlaylist] = useState(null); // Estado para almacenar la playlist expandida

  const [showPlaylistForm, setShowPlaylistForm] = useState(false); // Estado para mostrar/ocultar el formulario

  const [token, setToken] = useState(localStorage.getItem("token")); // Estado para almacenar el token

  useEffect(() => {
    if (token) {
      getPlaylists(token, titlePartPlaylist)
        .then((data) => {
          setPlaylists(data);
        })
        .catch((error) => {
          console.log("Error:", error);
        });
    }
  }, [token, titlePartPlaylist, showPlaylistForm]); // Dependencia en el token

  const handleAddPlaylist = () => {
    setShowPlaylistForm(true);
  };

  const handleClosePlaylistForm = () => {
    setShowPlaylistForm(false);
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

  const handlePlaylistHover = (playlistId) => {
    setExpandedPlaylist(playlistId);
  };

  const handlePlaylistLeave = () => {
    setExpandedPlaylist(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pastel-purple to-pink flex flex-col relative">
      <Toaster />
      <nav className="pt-4 px-8 space-x-40 flex justify-start items-center">
        <div className="grid grid-cols-2 grid-rows-2">
          <div className="row-span-2 col-span-1">
            <img src={headphones} alt="logo" />
          </div>
          <div className="col-span-1 row-span-2 flex flex-col justify-center">
            <h1>Playlist</h1>
            <p className="text-sm">Grupo 4</p>
          </div>
        </div>
        <div className="flex items-left space-x-1/2">
          <button className="text-purple-600 px-4 py-2 rounded hover:text-white">
            <Link to="/home">Playlist</Link>
          </button>
          <button className="text-purple-600 px-4 py-2 rounded hover:text-white">
            <Link to="/addsong">Agregar Canción</Link>
          </button>
        </div>
      </nav>
      <div className="flex flex-col items-left">
        <div className="flex items-center mb-4 px-12 pt-8">
          <h1 className="text-black text-lg font-bold mr-4">Playlist</h1>
          <button className="bg-middle-purple text-white text-xs px-2 py-1 rounded" onClick={handleAddPlaylist}>
            Agregar nueva playlist
          </button>
        </div>
        <div className="flex items-center mb-4 px-7">
          <div className="w-full p-2 flex items-center justify-between rounded font-montserrat">
            <div className="flex items-center gap-4 pl-4">
              <FiSearch size={24} />
              <Input placeholder="Buscar Playlist..." bordered={false} style={{ backgroundColor: '#F6E2F8', height: '4vh', width: '30vw', borderRadius: '0.2rem' }} onChange={(e) => setTitlePartPlaylist(e.target.value)} />
            </div>
          </div>
        </div>
        <div className="flex items-center mb-4 px-14">
          <hr className="w-5/12 border-white" />
        </div>
        <div className="flex flex-col items-start mb-4 px-14 w-11/12">
          {playlists.map((playlist) => (
            <div
              key={playlist.code}
              onMouseEnter={() => handlePlaylistHover(playlist.code)}
              onMouseLeave={handlePlaylistLeave}
              style={{ width: '500px', height:'170px',transition: 'width 0.3s ease' }}
            >
              <Playlist
                id={playlist.code}
                title={playlist.title}
                description={playlist.description}
                expanded={expandedPlaylist === playlist.code}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-10 right-14">
        <img src={image} alt="imagen" className="max-w-full" />
      </div>
      <div className="flex-1"></div>
      <div className="flex justify-between">
        <div className="w-full">
          <img src={waves} alt="onda 1" className="w-full" />
        </div>
        {showPlaylistForm && ( // Mostrar el formulario si showPlaylistForm es verdadero
          <PlaylistForm
            onClose={handleClosePlaylistForm}
            onSubmit={handleSubmitPlaylistForm}
          />
        )}
      </div>
    </div>
  );
};

export default Home;


