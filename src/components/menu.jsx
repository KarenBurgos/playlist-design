import React, { useState, useEffect } from "react";
import { TbHeadphonesFilled, TbUserCircle } from "react-icons/tb";
import SongForm from "./CreateSongForm";
import { createSong } from "../services/SongService";
import { Toaster } from 'react-hot-toast';

function Menu( ) {
    const [song, setSong] = useState([]);
    const [showForm, setShowForm] = useState(false); // Estado para mostrar/ocultar el formulario

    const handleAddSong = () => {
        setShowForm(true);
    };

    const handleCloseForm = () => {
        setShowForm(false);
    };

    const handleSubmitForm = async (data) => {
        createSong(data.title, data.duration);
    };


  return (
    <nav className="relative">
        <div className="flex justify-between px-10 py-4">
            <div className="grid grid-cols-2 grid-rows-2">
                <div className="row-span-2 col-span-1">
                    <TbHeadphonesFilled color='#000000' size={48} />
                </div>
                <h1 className="row-span-1 col-span-1">Playlist</h1>
                <h2 className="row-span-1 col-span-1">grupo 4</h2>
            </div>
            <div className="flex justify-around w-1/4">
                <div className="font-semibold text-lg cursor-pointer">
                    Playlist
                </div>
                <div className="font-semibold text-lg cursor-pointer"  onClick={handleAddSong}>
                    Crear Canción
                </div>
            </div>
            <div>
                <TbUserCircle color='#000000' size={48} />
            </div>
            {showForm && ( // Mostrar el formulario si showForm es verdadero
                    <SongForm onClose={handleCloseForm} onSubmit={handleSubmitForm} />
                )}           

        </div>
        <Toaster
                  position="top-center"
                  reverseOrder={false}
                />
    </nav>
  );
}

export default Menu;