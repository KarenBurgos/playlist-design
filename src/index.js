import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from './pages/Login';
import ChangePassword from './pages/ChangePassword';
import CreateAccount from './pages/CreateAccount'


import Home from './pages/Home';

/* solo es para revisar los componentes para mientras */
import Playlist from './components/Playlist';
import PlaylistForm from './components/PlaylistForm';
import PlaylistInfo from './components/PlaylistInfo';
import Song from './components/Song';
import SongForm from './components/SongForm';
import AddSong from './pages/AddSong';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route index element={<Login />}></Route>
      <Route path="changepassword" element={<ChangePassword />}></Route>
      <Route path="createaccount" element={<CreateAccount />}></Route>
      <Route path="home" element={<Home />}></Route>
      <Route path="addsong" element={<AddSong />}></Route>
      /* solo es para revisar los componentes para mientras */
      <Route path="playlist" element={<Playlist />}></Route>
      <Route path="playlistform" element={<PlaylistForm />}></Route>
      <Route path="playlistinfo" element={<PlaylistInfo />}></Route>
      <Route path="song" element={<Song />}></Route>
      <Route path="songform" element={<SongForm />}></Route>

    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
