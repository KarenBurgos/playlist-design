import Menu from "../components/menu";
import wave1 from '../assets/wave1-home.png';
import wave2 from '../assets/wave2-home.png';
import Song from '../components/Song';
import { useParams } from "react-router-dom";
import AddSongForm from "../components/AddSongForm";
import { getPlaylistsWithSongs } from "../services/SongXPlaylist";
import { useEffect, useState } from "react";


function Songs() {
    const [songs, setSongs] = useState([]);
    const params = useParams();
    const [durationTotal, setDurationTotal] = useState(0);

    const calculateRemainingHeight = () => {
        const headerHeight = 200; // Ajusta esto según la altura del encabezado
        const footerHeight = 200; // Ajusta esto según la altura del pie de página
        const windowHeight = window.innerHeight;
        return windowHeight - headerHeight - footerHeight;

    };

    useEffect(() => {
        const fetchSongs = async () => {
            try {
                const data = await getPlaylistsWithSongs(params.code);
                setSongs(data.songInfo);
                console.log(data.songInfo)
                setDurationTotal(data.totalDuration);
                
            } catch (error) {
                console.log('Error:', error);
            }
        };

        fetchSongs();
    }, []);

    const [showForm, setShowForm] = useState(false); // Estado para mostrar/ocultar el formulario

    const handleAddSong = () => {
        setShowForm(true);
    };

    const handleCloseForm = () => {
        setShowForm(false);
    };

    return (
        <div className="h-screen relative from-purple-gradient to-pink-gradient bg-gradient-to-b">
            <Menu />

            <div className="py-10 px-28 relative z-10">
                <div className="grid grid-cols-2 w-1/4">
                    <div>
                        <h1 className="text-lg font-semibold">Nombre playlist</h1>
                        {/* //TODO: Mostrar nombre de la playlist */}
                        <h2 className="text-white">Duración total: {durationTotal} minutos</h2>
                        {/* //TODO: Mostrar duracion de la playlist */}
                    </div>
                    <button className="bg-purple-dark text-white px-8 py-2 rounded" onClick={handleAddSong}>
                        Agregar canción
                    </button>
                </div>
                <div className="mt-16 overflow-y-auto" style={{ maxHeight: `${calculateRemainingHeight()}px` }}>
                    {songs.map((song) => (
                        <Song title={song.title} duration={song.duration}/>
                    ))}
                </div>
            </div>
            {showForm && ( // Mostrar el formulario si showForm es verdadero
                    <AddSongForm onClose={handleCloseForm} playlistId={params.code} />
                )} 

            <img src={wave1} className="absolute -z-0 bottom-0 w-full h-1/3" />
            <img src={wave2} className="absolute -z-0 bottom-0 w-full h-1/3" />
        </div>
    );
}

export default Songs;