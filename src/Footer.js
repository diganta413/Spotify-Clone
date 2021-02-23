import React from 'react'
import './Footer.css'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import RepeatIcon from '@material-ui/icons/Repeat';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import QueueMusicIcon from '@material-ui/icons/QueueMusic';
import BluetoothConnectedIcon from '@material-ui/icons/BluetoothConnected';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import {DatalayerContext} from './DataLayer'

function Footer() {
    const [{ current_song },dispatch]=DatalayerContext();

    return (
        <div className="footer_body">
            <div className="footer_left">
                <img src={current_song?.track?.album?.images[2]?.url}></img>
                <div className="footer_left_song_info">
                <h4>{current_song?.track?.name}</h4>
                <p>{current_song?.track?.artists?.map((artist)=>artist?.name)?.join(" , ")}</p>
                </div>
                          
            </div>
            <div className="footer_middle">
                <ShuffleIcon className="footer_icons"/>
                <SkipPreviousIcon className="footer_icons"/>
                <PlayCircleFilledIcon className="footer_icons play" fontSize="large"/>
                <SkipNextIcon className="footer_icons"/>
                <RepeatIcon className="footer_icons"/>
            </div>
            <div className="footer_right">
                <Grid container spacing={2}>
                    <Grid item>
                        <QueueMusicIcon className="footer_icons"/>
                    </Grid>
                    <Grid item>
                        <BluetoothConnectedIcon className="footer_icons"/>
                    </Grid>
                    <Grid item>
                        <VolumeUpIcon className="footer_icons"/>
                    </Grid>
                    <Grid item xs>
                        <Slider className="slider"/>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer
