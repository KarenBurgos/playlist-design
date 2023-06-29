import React, { useState, useEffect } from "react";
import { RiPlayList2Line, RiMusic2Line } from "react-icons/ri";
import Song from "../components/Song";
import { toast, Toaster } from "react-hot-toast";
import { Link, Outlet } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { Input } from 'antd';

import waves from "../assets/waves-home.png";
import headphones from "../assets/headphones.png";
import image from '../assets/music2.png'
import loadMoreImage from '../assets/load-more.png'

import SongForm from "../components/SongForm"; // Importamos el formulario song

import { addSongs, getSongs } from "../services/Song";

function AddSong() {
    const [songs, setSongs] = useState([]);
    const [size, setSize] = useState(10);
    const [titlePartSong, setTitlePartSong] = useState('');
    const [showSongForm, setShowSongForm] = useState(false); // Estado para mostrar/ocultar el formulario
    const [token, setToken] = useState(localStorage.getItem("token")); // Estado para almacenar el token

    useEffect(() => {
        try {
            getSongs(token, size, titlePartSong).then((data) => {
                setSongs(data);
            });
        } catch (error) {
            console.log("Error:", error);
        }
    }, [token, size, titlePartSong]); // Dependencia en el size

    const handleAddSong = () => {
        setShowSongForm(true);
    };

    const handleCloseSongForm = () => {
        setShowSongForm(false);
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
                        <Link to="/home">
                            Playlist
                        </Link>
                    </button>
                    <button className="text-purple-600 px-4 py-2 rounded hover:text-white">
                        <Link to="/addsong">
                            Agregar Canción
                        </Link>
                    </button>
                </div>
            </nav>
            <div className="flex flex-col items-left">
                <div className="flex items-center mb-4 px-12 pt-8">
                    <h1 className="text-black text-lg font-bold mr-4">Canciones</h1>
                    <button className="bg-middle-purple text-white text-sm px-2 py-1 rounded" onClick={handleAddSong}>
                        Agregar canción
                    </button>
                </div>
                <div className="flex items-center mt-4 mb-4 px-7">
                    <div className="w-full p-2 flex items-center justify-between rounded font-montserrat">
                        <div className="flex items-center gap-4 pl-4">
                            <FiSearch size={24} />
                            <Input placeholder="Buscar canción..." bordered={false} style={{ backgroundColor: '#F6E2F8', height: '4vh', width: '30vw', borderRadius: '0.2rem' }} onChange={(e) => setTitlePartSong(e.target.value)} />
                        </div>
                    </div>
                </div>
                <div className="flex items-center mb-4 px-14">
                    <hr className="w-5/12 border-white" />
                </div>
                <div className="flex flex-col items-start mb-4 px-14">
                    <div className="flex flex-col items-start">
                        {songs.map((song) => (
                            <div className="song-item w-96 h-24 my-2">
                                <Song id={song.code} title={song.title} duration={song.duration} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <img src={loadMoreImage} alt="Load more" className="w-12 h-12" onClick={() => setSize(size + 10)} />
                </div>
            </div>
            <div className="absolute top-20 right-16">
                <img src={image} alt="escuchando musica" className="max-w-full" />
            </div>
            <div className="flex-1"></div>
            <div className="flex justify-between">
                <div className="w-full">
                    <img src={waves} alt="onda 1" className="w-full" />
                </div>
                {showSongForm && ( // Mostrar el formulario si showSongForm es verdadero
                    <SongForm
                        onClose={handleCloseSongForm}
                        onSubmit={handleSubmitSongForm}
                    />
                )}
            </div>
        </div>
    );
};

export default AddSong;


