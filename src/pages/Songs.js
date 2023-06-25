import Menu from "../components/menu";
import wave1 from '../assets/wave1-home.png';
import wave2 from '../assets/wave2-home.png';
import Song from '../components/Song';

function Songs(){
    const calculateRemainingHeight = () => {
        const headerHeight = 200; // Ajusta esto según la altura del encabezado
        const footerHeight = 200; // Ajusta esto según la altura del pie de página
        const windowHeight = window.innerHeight;
        return windowHeight - headerHeight - footerHeight;
      };

    return(
        <div class="h-screen relative from-purple-gradient to-pink-gradient bg-gradient-to-b">
           <Menu/> 

            <div className="py-10 px-28 relative z-10">
                <div className="grid grid-cols-2 w-1/4">
                    <div>
                        <h1 className="text-lg font-semibold">Nombre playlist</h1> {/* //TODO: Mostrar nombre de la playlist */}
                        <h2 className="text-white">Duracion: 3:15:04</h2> {/* //TODO: Mostrar duracion de la playlist */}
                    </div>
                    <button className="bg-purple-dark text-white px-8 py-2 rounded">Agregar canción</button>
                </div>
                    <Song title="Song 1" duration="5:00"/>
                <div className="mt-16 overflow-y-auto" style={{ maxHeight: `${calculateRemainingHeight()}px` }}>
                    <Song title="Song 1" duration="5:00"/>
                    <Song title="Song 1" duration="5:00"/>
                    <Song title="Song 1" duration="5:00"/>
                    <Song title="Song 1" duration="5:00"/>
                    <Song title="Song 1" duration="5:00"/>
                    <Song title="Song 1" duration="5:00"/>
                    <Song title="Song 1" duration="5:00"/>
                    <Song title="Song 1" duration="5:00"/>
                    <Song title="Song 1" duration="5:00"/>
                    <Song title="Song 1" duration="5:00"/>
                    <Song title="Song 1" duration="5:00"/>
                    <Song title="Song 1" duration="5:00"/>


                </div>
            </div>
            


           <img src={wave1} className="absolute -z-0 bottom-0 w-full h-1/3" />
            <img src={wave2} className="absolute -z-0 bottom-0 w-full h-1/3" />
        </div>
    );
}

export default Songs;