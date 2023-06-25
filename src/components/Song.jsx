import React from "react";
import { RiMusic2Line } from "react-icons/ri";

function Song({ title, duration }) {
  return (
    <div className="bg-white rounded-lg p-4 flex items-center mt-3">
      <RiMusic2Line className="text-blue-500 text-2xl mr-2" />
      <div>
        <h2 className="text-lg font-bold">Canción 1</h2>
        <p className="text-gray-500">Duración: 3:45 minutos</p>
      </div>
    </div>
  );
}

export default Song;
