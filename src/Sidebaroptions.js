import { PlaylistAdd } from '@material-ui/icons';
import React,{ useState,useEffect } from 'react'
import "./Sidebaroptions.css";
import {DatalayerContext} from './DataLayer'

function Sidebaroptions({ title,Icon,spotify }) {
    const [{ playlists,current_playlist,bengali_favourites },dispatch]=DatalayerContext();
    

    const Playlist = (title) => {
        playlists.items.map((playlist) => {
            if(playlist.name==title)
            {
                spotify.getPlaylist(playlist.id).then((play)=>{
                    dispatch({type: 'SET_CURRENT_PLAYLIST',current_playlist: play,})
                })
                
            }
        })
    }
    
    return (
        <div className="Sidebar_options" onClick={() => Playlist(title)}>
            {Icon && <Icon className="sidebaroptions_icon"/>}
            <p>{title}</p>
        </div>
    )
}

export default Sidebaroptions
