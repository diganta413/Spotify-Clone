import React from 'react'
import "./Login.css"
import { url } from './api'


function Login() {

    
    
    return (
        <div>
            <div className="main">
                <h1>Spotify Clone</h1>
                <img src="./spotify.jpg" alt="spotify"></img>
                <a href={url}>Login</a>
            </div>
            
        </div>
    )
}

export default Login;
