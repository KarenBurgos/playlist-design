import logo from './logo.svg';
import image from './assets/Music.gif'
import wave1 from './assets/wave1-login.png'
import wave2 from './assets/wave2-login.png'
import { TbHeadphonesFilled } from "react-icons/tb";
import './App.css';

function App() {
  return (
    <div className="App h-screen ">
      <div className='flex flex-col justify-center items-center h-full '>

        <div class="bg-white shadow-md rounded mb-4 w-3/5 h-auto flex z-20">

          <div class="flex flex-col items-start w-1/2 p-8 h-full justify-items-center">
            <h1 className='font-bold text-2xl text-purple mb-10'>Inicio de sesion</h1>
            <form className="flex flex-col w-5/6 items-start">
              <label>
                Usuario
              </label>
              <input placeholder='Ej. gerardo' className="w-full border rounded px-3 py-1 border-border-gray mb-5"></input>
              <label>
                Contraseña
              </label>
              <input placeholder='Ej. 123456!' className="w-full border rounded px-3 py-1 border-border-gray mb-10"></input>
              <button className='bg-gradient-to-r from-purple to-pink px-6 py-2 rounded text-white'>Iniciar sesión</button>
            </form>
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

export default App;
