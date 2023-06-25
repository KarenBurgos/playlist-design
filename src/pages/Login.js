import image from '../assets/Music.gif'
import wave1 from '../assets/wave1-login.png'
import wave2 from '../assets/wave2-login.png'
import backgroundTriangle from '../assets/background-decoration.png'
import { TbHeadphonesFilled } from "react-icons/tb";
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginService } from '../services/User';
import toast, { Toaster } from 'react-hot-toast';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setusernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();

    if(username.trim().length == 0 )
      setusernameError(true);
    else
      setusernameError(false);

    if(password.trim().length == 0 )
      setPasswordError(true);
    else
      setPasswordError(false);


    if(passwordError == false && usernameError == false)
    try {
      await loginService(username, password);
      navigate("/home")
    } catch (error) {
      console.log(error)
    }
  };


  return (
    <div className="h-screen bg-purple relative">
      <img src={backgroundTriangle} className='absolute -z-0 w-screen h-screen'/>
      <div className='flex flex-col justify-center items-center h-full '>

        <div class="bg-white shadow-md rounded mb-4 w-3/5 h-auto flex z-20">

          <div class="flex flex-col items-start w-1/2 p-12 h-full justify-items-center">
            <h1 className='font-bold text-2xl text-purple mb-10'>Inicio de sesion</h1>
            <form className="flex flex-col w-5/6 items-start" onSubmit={handleClick}>
              <label>
                Usuario
              </label>
              <input className={`w-full border rounded px-3 py-1 border-border-gray  ${usernameError && 'border-red'}`} type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
              { usernameError && 
                <p class="text-red">Este campo no puede estar vacio</p>
              }
              <label className="mt-4">
                Contraseña
              </label>
              <input className={`w-full border rounded px-3 py-1 border-border-gray  mb-2 ${usernameError && 'border-red'}`} type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
              { passwordError && 
                <p class="text-red">Este campo no puede estar vacio</p>
              }

              <Link to="/changepassword">
              <a className='w-full flex justify-end  text-border-gray mb-10'>¿olvidaste tu contraseña?</a>
              </Link>

              <button className='bg-purple px-6 py-2 rounded text-white' type='submit'>Iniciar sesión</button>
              <Link to="/createaccount">
              <button className='bg-white text-purple border border-purple px-6 py-2 rounded'>Crear cuenta</button>
              </Link>
              
            </form>
            <Toaster
                  position="top-center"
                  reverseOrder={false}
                />
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