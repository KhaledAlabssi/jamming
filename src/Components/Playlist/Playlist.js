import React from 'react'
import {TrackList} from '../TrackList/TrackList'

import './Playlist.css'

export class Playlist extends React.Component {

    render() {

        return (
            <div className="Playlist">
                <input defaultValue={"New Playlist"} />
                <TrackList tracks={this.props.playlistTracks} isRemoval={true} onRemove={this.props.onRemove} /> 
                <button className="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        )
    }
}