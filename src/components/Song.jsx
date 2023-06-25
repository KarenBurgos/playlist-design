import React, { useState, useEffect } from "react";
import { RiMusic2Line, RiEditBoxLine, RiDeleteBin2Line  } from "react-icons/ri";
import { deleteSong } from "../services/SongService";

function Song({ title, duration }) {
  const [showForm, setShowForm] = useState(false); // Estado para mostrar/ocultar el formulario

  function onMouseOver(){
    setShowForm(true)
  }
  function onMouseLeave(){
    setShowForm(false)
  }

  function Delete(){
    deleteSong(title)
  }

  return (
    <div className="bg-white opacity-75 rounded-lg p-4 flex justify-between items-center mt-3 hover:opacity-100" onMouseOver={onMouseOver} onMouseOut={onMouseLeave}>
      <div class="flex">
        <RiMusic2Line className="text-blue-500 text-2xl mr-2" />
        <div>
          <h2 className="text-lg font-bold">{title}</h2>
          <p className="text-gray-500">Duración: {duration} minutos</p>
        </div>
      </div>
      {showForm &&
        <div class="flex"> 
          <RiEditBoxLine className="text-blue-500 text-2xl mr-2"/>
          <RiDeleteBin2Line className="text-blue-500 text-2xl mr-2" onClick={Delete}/>
        </div>
      }
    </div>
  );
}

export default Song;
