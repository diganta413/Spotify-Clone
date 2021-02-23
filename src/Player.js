import React from 'react';
import './Player.css';
import Body from './Body';
import Sidebar from "./Sidebar";
import Footer from './Footer';

function Player({ spotify }) {
    return (
        <div>
            <div className="main_body">
            <Sidebar spotify={spotify}/>
            <Body spotify={spotify}/>
            </div>
            <Footer/>
        </div>
    )
}

export default Player;
