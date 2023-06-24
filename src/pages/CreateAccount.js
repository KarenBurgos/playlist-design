import image from '../assets/Welcome.gif'
import wave1 from '../assets/wave1-createaccount.png'
import wave2 from '../assets/wave2-createaccount.png'
import backgroundTriangle from '../assets/background-decoration-pink.png'
import { TbHeadphonesFilled } from "react-icons/tb";
import React, { useState } from 'react';
import { signupService } from '../services/User';
import axios from 'axios';
import { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';

function CreateAccount() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [usernameError, setusernameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [emailError, setEmailError] = useState(false);


    function onsubmitHadler(e) {
        e.preventDefault();

        if (username.trim().length == 0)
            setusernameError(true);
        else
            setusernameError(false);

        if (password.trim().length == 0)
            setPasswordError(true);
        else
            setPasswordError(false);

        if (email.trim().length == 0)
            setEmailError(true);
        else
            setEmailError(false);


        if (passwordError == false && usernameError == false && emailError == false)
            signupService(username, password, email);
    }
    return (
        <div className="h-screen bg-pink relative">
            <img src={backgroundTriangle} className='absolute -z-0 w-screen h-screen' />
            <div className='flex flex-col justify-center items-center h-full '>

                <div class="bg-white shadow-md rounded mb-4 w-3/5 h-auto flex z-20">

                    <div class="flex flex-col items-start w-1/2 p-12 h-full justify-items-center">
                        <h1 className='font-bold text-2xl text-pink-dark mb-10'>Crear nueva cuenta</h1>
                        <form className="flex flex-col w-5/6 items-start" onSubmit={onsubmitHadler}>
                            <label>
                                Nombre de usuario
                            </label>
                            <input className={`w-full border rounded px-3 py-1 border-border-gray mb-5 ${usernameError && 'border-red'}`} type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                            <label>
                                Contraseña
                            </label>
                            <input className="w-full border rounded px-3 py-1 border-border-gray mb-2" type="password" value={password} onChange={(e) => setPassword(e.target.value)} ></input>
                            <label>
                                Correo
                            </label>
                            <input className="w-full border rounded px-3 py-1 border-border-gray mb-2" type="email" value={email} onChange={(e) => setEmail(e.target.value)} ></input>

                            <a className='w-full flex justify-end text-border-gray mb-10'><Link to="/" class="w-full">¿Ya tienes una cuenta?</Link></a>


   
                                <button className='bg-pink-dark px-6 py-2 rounded text-white' type='submit'>Crear cuenta</button>

                        </form>
                    </div>

                    <div className='w-1/2 bg-pink-light relative'>
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

export default CreateAccount;