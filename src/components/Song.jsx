import React from "react";
import { RiMusic2Line } from "react-icons/ri";

function Song({ id, title, duration }) {
  return (
    <div className="bg-white rounded-lg p-4 flex items-center mt-3" key={id}>
      <RiMusic2Line className="text-blue-500 text-2xl mr-2" />
      <div>
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-gray-500">Duración: {duration}</p>
      </div>
    </div>
  );
}

export default Song;
