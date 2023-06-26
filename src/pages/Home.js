import React, { useState, useEffect } from "react";
import { RiPlayList2Line, RiMusic2Line } from 'react-icons/ri';
import { BiPlusCircle } from 'react-icons/bi'
import backgroundTriangle from '../assets/background-decoration-orange.png';
import Song from '../components/Song';
import Playlist from '../components/Playlist';
import { toast, Toaster } from "react-hot-toast";
import PlaylistForm from "../components/PlaylistForm"; // Importamos el formulario

import { addPlaylist, getPlaylists } from "../services/Playlist";
import { addSongs, getSongs } from "../services/Song";

function Home() {
    const [playlists, setPlaylists] = useState([]);
    const [songs, setSongs] = useState([]);
    const [size, setSize] = useState(10);

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
                    console.log('Error:', error);
                });
        }
    }, [token]); // Dependencia en el token

    useEffect(() => {
        getSongs(token, size)
                .then((data) => {
                    setSongs(data);
                })
                .catch((error) => {
                    console.log('Error:', error);
                });
    }, [size]); // Dependencia en el size

    const handleAddPlaylist = () => {
        setShowPlaylistForm(true);
    };

    const handleCloseForm = () => {
        setShowPlaylistForm(false);
    };

    const handleSubmitForm = async (data) => {
        try {
          const response = await addPlaylist(data.title, data.description, token);
          console.log(response);
          toast.success('Playlist added!');
          setShowPlaylistForm(false);
          // Actualizar las playlists después de añadir una nueva
          const updatedPlaylists = await getPlaylists();
          setPlaylists(updatedPlaylists);
        } catch (error) {
          console.log('Error:', error);
          toast.error('Error adding playlist');
        }
      };
      

    return (
        <div
            className="h-max bg-orange relative"
            style={{ backgroundImage: `url(${backgroundTriangle})` }}
        >
            <Toaster/>
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
                    />
                    <button className="bg-blue-500 hover:bg-blue-600 text-black px-4 py-2 rounded">
                        <BiPlusCircle className="inline-block mr-2" />
                        Añadir Canción
                    </button>
                    {songs.map((song) => (
                        <Song
                            id={song.code}
                            title={song.title}
                            duration={song.duration}
                        />
                    ))}
                    <button className="bg-red border-x-orange-dark text-white rounded-lg p-4 mt-3 w-full" onClick={(e) => {e.preventDefault(); setSize(size+10)}}>Cargar más</button>
                </div>
                {showPlaylistForm && ( // Mostrar el formulario si showPlaylistForm es verdadero
                    <PlaylistForm onClose={handleCloseForm} onSubmit={handleSubmitForm} />
                )}
            </div>
        </div>
    );
}

export default Home;

