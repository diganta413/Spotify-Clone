import React, { useState,useEffect } from 'react'
import './Body.css'
import Header from './Header'
import Banner from './Banner'
import Songrow from './Songrow'
import {DatalayerContext} from './DataLayer'
import { ContactSupportOutlined } from '@material-ui/icons'


function Body({ spotify }) {
    const [{ bengali_favourites,current_playlist },dispatch]=DatalayerContext();
    
    console.log(current_playlist);
    
    return (
        <div className="body">
            
            <Header/>
            <Banner spotify={spotify}/>
            {current_playlist?.tracks?.items?.map((item)=><Songrow item={item}/>)}
            
            
        </div>
    )
}

export default Body
