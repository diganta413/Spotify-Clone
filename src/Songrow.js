import React,{useState} from 'react'
import {DatalayerContext} from './DataLayer'
import './Songrow.css'
import ReactAudioPlayer from 'react-audio-player';

function Songrow({ item }) {
    const [{ playing },dispatch]=DatalayerContext();
    const [play,set_play]=useState(false);

    const song_click = () => {
        if(play && playing)
        {
            dispatch({type: 'SET_PLAYING',playing: false,})
            dispatch({type: 'SET_CURRENTSONG',current_song: null,})
           set_play(false);
        }
        else
        {
            dispatch({type: 'SET_PLAYING',playing: true,})
            dispatch({type: 'SET_CURRENTSONG',current_song: item,})
            set_play(true);
        }
        
         
    }
    
    
    return (
        <div className="songrow" onClick={() => song_click()}>
            <img src={item?.track?.album?.images[2]?.url}></img>
            <div className="song_details">
                <h3>{item?.track?.name}</h3>
                <p>{item?.track?.artists?.map((artist)=>artist?.name)?.join(" , ")}</p>
            </div>
            {play &&
            <ReactAudioPlayer
            src={item.track.preview_url}
            autoPlay
            controls
            />}
        </div>
    )
}

export default Songrow
