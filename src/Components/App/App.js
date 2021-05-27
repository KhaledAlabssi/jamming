import React from 'react'
import {SearchBar} from '../SearchBar/SearchBar'
import {SearchResults} from '../SearchResults/SearchResults'
import {Playlist} from '../Playlist/Playlist'

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {searchResults: [
      {name: 'say my name', artisit: 'babe rexha', album: 'bla1', id: 1},
      {name: 'say name', artisit: 'babe r', album: 'bla2', id: 2},
      {name: 'my name', artisit: 'babe ha', album: 'bla3', id: 3}
    ],
    playlistNam: 'My Playlist',
    playlistTracks: [
      {name: 'Playlist say my name', artisit: 'Playlistbabe rexha', album: 'Playlist bla1', id: 4},
      {name: 'Playlist say name', artisit: 'Playlist babe r', album: 'Playlist bla2', id: 5},
      {name: 'Playlist my name', artisit: 'Playlist babe ha', album: 'Playlist bla3', id: 6}
    ]
  }
  this.addTrack = this.addTrack.bind(this)
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks
    if(tracks.find(oldTrack => oldTrack.id === track.id)) {
      return;
    }else {
      tracks.push(track)
      this.setState({playlistTracks: tracks})
    }

  } 

  render() {

    return(
      <div>
  <h1>Ja<span class="highlight">mmm</span>ing</h1>
  <div className="App">
    <SearchBar />
    <div className="App-playlist">
      <SearchResults onAdd={this.addTrack} searchResults={this.state.searchResults} />
      <Playlist playlistName={this.state.playlistNam} playlistTracks={this.state.playlistTracks} />
    </div>
  </div>
</div>
    )
  }
}

export default App;
