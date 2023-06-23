import logo from './logo.svg';

import './App.css';

function Login() {
  return (
    <div className="App">
      <div className='flex justify-center '>
        <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/2 h-auto">
          <div class="flex flex-col items-start">
            <h1>Login</h1>

            <form>
              <label>
                Usuario
              </label>
              <input placeholder='Ej. gerardo' className="w-full h-full border rounded px-3 py-2 border-border-gray"></input>
              <label>
                Contraseña
              </label>
              <input placeholder='Ej. 123456!' className="w-full h-full border rounded px-3 py-2 border-border-gray"></input>

              <button>Iniciar sesión</button>
            </form>
          </div>
          <div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Login;
