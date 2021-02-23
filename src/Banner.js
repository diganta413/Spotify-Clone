import React,{ useState } from 'react'
import './Banner.css'
import {DatalayerContext} from './DataLayer';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

function Banner({ spotify }) {
    const [{ bengali_favourites,current_playlist },dispatch]=DatalayerContext();
    
    
    return (
        
        <div className="banner">
            <div className="main_banner">
            <img src={current_playlist?.images[0].url} alt=""></img>
            <div className="banner_info">
                <p>Playlist</p>
                <h1>{current_playlist?.name}</h1>
                <h4>{current_playlist?.owner?.display_name}</h4>
            </div>
            </div>
            
            <div className="banner_icons">
                <PlayCircleFilledIcon className="play"/>
                <MoreHorizIcon className="dot"/>
            </div>
        </div>
    )
}

export default Banner;
