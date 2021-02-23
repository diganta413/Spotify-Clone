import React from 'react';
import './Sidebar.css';
import Sidebaroptions from './Sidebaroptions'
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import AddBoxIcon from '@material-ui/icons/AddBox';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {DatalayerContext} from './DataLayer'

function Sidebar({ spotify }) {
    const [{ playlists },dispatch]=DatalayerContext();
    return (
        <div className="sidebar_body">
            
            <img src="./spotify.jpg" alt="spotify"></img>
            <div className="upper_part">
            <Sidebaroptions title="Home" Icon={HomeIcon} spotify={spotify}/>
            <Sidebaroptions title="Search" Icon={SearchIcon} spotify={spotify}/>
            <Sidebaroptions title="Your Library" Icon={LibraryMusicIcon} spotify={spotify}/>
            </div>
            <strong className="sidebar_title">Playlists</strong>
            <div className="middle">
                
                <Sidebaroptions title="Create Playlist" Icon={AddBoxIcon} spotify={spotify}/>
                <Sidebaroptions title="Liked Songs" Icon={FavoriteIcon} spotify={spotify}/>
            </div>
            <hr/>
            <div className="sidebar_lower">
                {playlists?.items?.map((playlist) => <Sidebaroptions title={playlist.name} spotify={spotify}/>)}
            </div>
        </div>
        
    )
}

export default Sidebar
