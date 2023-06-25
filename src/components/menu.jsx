import React, { useState, useEffect } from "react";
import { TbHeadphonesFilled, TbUserCircle } from "react-icons/tb";

function Menu( ) {
  return (
    <nav >
        <div className="flex justify-between px-10 py-4">
            <div className="grid grid-cols-2 grid-rows-2">
                <div className="row-span-2 col-span-1">
                    <TbHeadphonesFilled color='#000000' size={48} />
                </div>
                <h1 className="row-span-1 col-span-1">Playlist</h1>
                <h2 className="row-span-1 col-span-1">grupo 4</h2>
            </div>
            <div className="flex justify-around w-1/4">
                <div className="font-semibold text-lg">
                    Playlist
                </div>
                <div className="font-semibold text-lg">
                    Agregar Canción
                </div>
            </div>
            <div>
                <TbUserCircle color='#000000' size={48} />
            </div>
            


        </div>
    </nav>
  );
}

export default Menu;