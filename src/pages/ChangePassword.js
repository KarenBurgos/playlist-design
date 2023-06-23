import image from '../assets/Change password.gif'
import wave1 from '../assets/wave1-changePassword.png'
import wave2 from '../assets/wave2-changePassword.png'
import backgroundTriangle from '../assets/background-decoration-orange.png'
import { TbHeadphonesFilled } from "react-icons/tb";
import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function ChangePassword() {
    return (
        <div className="h-screen bg-orange relative">
            <img src={backgroundTriangle} className='absolute -z-0 w-screen h-screen' />
            <div className='flex flex-col justify-center items-center h-full '>

                <div class="bg-white shadow-md rounded mb-4 w-3/5 h-auto flex z-20">

                    <div class="flex flex-col items-start w-1/2 p-12 h-full justify-items-center">
                        <h1 className='font-bold text-2xl text-orange-dark mb-10'>Cambiar contraseña</h1>
                        <form className="flex flex-col w-5/6 items-start" >
                            <label>
                                Nueva contraseña
                            </label>
                            <input className="w-full border rounded px-3 py-1 border-border-gray mb-5" type="text" />
                            <label>
                                Confirmar contraseña
                            </label>
                            <input className="w-full border rounded px-3 py-1 border-border-gray mb-2" type="password"></input>
        

                            <Link to="/">
                            <button className='bg-orange-dark px-6 py-2 rounded text-white' type='submit'>Cambiar contraseña</button>
                            </Link>
                        </form>
                    </div>

                    <div className='w-1/2 bg-orange-light relative'>
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

export default ChangePassword;