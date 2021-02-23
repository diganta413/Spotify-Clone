import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import Avatar from '@material-ui/core/Avatar';
import './Header.css';
import { DatalayerContext } from './DataLayer'

function Header() {
    const [{ user },dispatch]=DatalayerContext();
    
    return (
        <div className="header">
            <div className="header_left">
                <SearchIcon/>
                <input placeholder="Search for songs"></input>
            </div>
            <div className="header_right">
                <Avatar src={user?.images[0]?.url} alt="User"/>
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    )
}

export default Header;