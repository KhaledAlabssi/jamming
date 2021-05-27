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
    ]}
  }

  render() {

    return(
      <div>
  <h1>Ja<span class="highlight">mmm</span>ing</h1>
  <div className="App">
    <SearchBar />
    <div className="App-playlist">
      <SearchResults searchResults={this.state.searchResults} />
      <Playlist />
    </div>
  </div>
</div>
    )
  }
}

export default App;
