import React, { useState, useEffect } from "react";
import { RiPlayList2Line } from 'react-icons/ri';

function Playlist({ id, title, description }) {
  return (
    <div className="bg-white rounded-lg p-4 flex items-center mt-3">
      <RiPlayList2Line className="text-blue-500 text-2xl mr-2" />
      <div key={id}>
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-gray-500">{description}</p>
      </div>
    </div>
  );
}

export default Playlist;
