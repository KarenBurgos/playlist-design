import image from '../assets/Music.gif'
import wave1 from '../assets/wave1-login.png'
import wave2 from '../assets/wave2-login.png'
import backgroundTriangle from '../assets/background-decoration.png'
import headphone from '../assets/headphones.png'
import { TbHeadphonesFilled } from "react-icons/tb";
import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UserService } from '../services/User';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');;


  const handleClick = (e) => {
    e.preventDefault();

    UserService(username, password, setToken);
  };


  return (
    <div className="h-screen bg-purple relative">
      <img src={backgroundTriangle} className='absolute -z-0 w-screen h-screen'/>
      <div className='flex flex-col justify-center items-center h-full '>

        <div class="bg-white shadow-md rounded mb-4 w-3/5 h-auto flex z-20">

          <div class="flex flex-col items-start w-1/2 p-12 h-full justify-items-center">
            <h1 className='font-bold text-2xl text-purple mb-10'>Inicio de sesion</h1>
            <form className="flex flex-col w-5/6 items-start" onClick={handleClick}>
              <label>
                Usuario
              </label>
              <input placeholder='Ej. gerardo' className="w-full border rounded px-3 py-1 border-border-gray mb-5" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
              <label>
                Contraseña
              </label>
              <input placeholder='Ej. 123456!' className="w-full border rounded px-3 py-1 border-border-gray mb-2" type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>

              <Link to="/changepassword">
              <a className='w-full flex justify-end  text-border-gray mb-10'>¿olvidaste tu contraseña?</a>
              </Link>

              <button className='bg-purple px-6 py-2 rounded text-white' type='submit'>Iniciar sesión</button>
              <Link to="/createaccount">
              <button className='bg-white text-purple border border-purple px-6 py-2 rounded' type='submit'>Crear cuenta</button>
              </Link>
            </form>
            {token && <p>Token: {token}</p>}
          </div>

          <div className='w-1/2 bg-purple-light relative'>
            <div className='grid grid-cols-2 grid-rows-2 p-8'>
              <div className='row-span-2 col-span-1'>
                <TbHeadphonesFilled color='#FFFFFF' size={48} />
              </div>
              <h1 className='col-span-1 row-span-1'>Playlist</h1>
              <h2 className='col-span-1 row-span-1'>Grupo 4</h2>
            </div>

            <img src={image} className='w-5/6 h-auto self-center' />
            <div className='w-full aboslute bottom-0 left-0'>
              <img src={wave1} className="absolute -z-0 bottom-0 w-full h-1/4" />
              <img src={wave2} className="absolute -z-0 bottom-0 w-full h-1/4" />
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Login;
