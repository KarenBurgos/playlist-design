import {getPlaylistsService} from '../services/PlaylistService'

function AllPlaylist(){

    function getStorage() {

        getPlaylistsService()
    }

    return(
        <div>
            <button className="bg-purple px-4 py-2" onClick={getStorage}>click</button>
            
        </div>
    )
}

export default AllPlaylist;