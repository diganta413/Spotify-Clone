import React,{ useState,useEffect } from "react";
import './App.css';
import Login from "./Login";
import {getaccesstoken} from './api'
import SpotifyWebApi from "spotify-web-api-js";
import Player from './Player';
import {DatalayerContext} from './DataLayer';

function App() {
  const [t1,changetoken]=useState(null);
  const spotify=new SpotifyWebApi();
  const [{ user },dispatch]=DatalayerContext();

    useEffect(() => {
        const token1=getaccesstoken();
        const final_token=token1.access_token;
        window.location.hash="";
        if(final_token)
        {
            changetoken(final_token);
            spotify.setAccessToken(final_token);
            spotify.getMe().then((user) =>{
            
            dispatch({type: 'SET_USER',user: user,});
            })
            spotify.getUserPlaylists().then((playlists) => {
              dispatch({type: 'SET_PLAYLIST',playlists: playlists,});
            })
            spotify.getPlaylist("3Yxqy2JIBTxjhILJKmv8a4").then((playlist)=>{
              dispatch({type: 'SET_CURRENT_PLAYLIST',current_playlist: playlist});
            })
        }
        
        
    }, [t1])
    
  return (
    <div className="App">
      {
        t1 ? <Player spotify={spotify}/> :  <Login /> 
      }
      
    </div>
  );
}

export default App;
