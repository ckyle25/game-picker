import React, { Component } from 'react';
import logo from './logo.svg';
import './reset.css';
import './App.css';
import axios from 'axios';
import TitleButton from './components/TitleButton.js';
import GameInfo from './components/GameInfo.js';
import GetAddGames from './components/GetAddGames.js'
import {apiKey} from './config.js'


const proxyurl = "https://cors-anywhere.herokuapp.com/";
const localServer = 'http://localhost:3001/api/myGames/';

const config = {headers: {'Access-Control-Allow-Origin': '*',
                          'Access-Control-Allow-Methods': 'GET',
                          'Access-Control-Request-Headers': 'x-requested-with'}}

class App extends Component {
  constructor(){
    super();
    this.state= {
      games:[],
      selectedGameTitle: 'No Game Selected',
      selectedGameDescription: '',
      selectedGameImageURL: './Thumbs/no-box-art.jpg',
    }
  }

getGames = () => {
  axios.defaults.headers.common['Access-Control-Allow-Origin'] = "*";
  axios.get(localServer)
    .then( response =>{
      this.setState({
        games: response.data
      })
    })
}

addGame = (newGame) => {
  axios.post(localServer,newGame)
    .then(res => {
      this.setState({
        games: res.data
      })
    })
}

deleteGame = (id) => {
  axios.delete(localServer + id)
    .then(res => {
      this.setState({
        games: res.data
      })
    })
}

editGame = (id,editedGame) => {
  axios.put(localServer + id, editedGame)
    .then(res => {
      this.setState({
        games: res.data
      })
    })
}

generateGame = () => {
  let randomNumber = Math.floor(Math.random() * (Math.max.apply(Math,this.state.games.map(game => {return game.id})) + 1));
  let gameObject = this.state.games.filter((obj) =>{
    if(obj.id === randomNumber){
      return obj;
    }
  })
  let gameID = gameObject[0].gbGameID
  let internalGameID = gameObject[0].id
  // axios.defaults.headers.common['Access-Control-Allow-Origin'] = "*";
  axios.get(proxyurl + 'https://www.giantbomb.com/api/game/'+gameID+`/?api_key=${apiKey}&format=json&field_list=name,deck,images`)
    .then(res => {
      this.setState({
        selectedGameTitle: res.data.results.name, 
        selectedGameDescription: res.data.results.deck,
        selectedGameImageURL: res.data.results.images[0].super_url
      })
    })
}

  render() {
    return (
      <div className="App">
        <section className="App-header">
          <div className="content1">
            <img src={require('./gifs/Boom.gif')}></img>
          </div>
          <div className="title">
            <h1>LAN Party Game Picker</h1>
            <TitleButton onClickUpdate={this.generateGame}/>
          </div>
          <div className="content2">
            <img src={require('./gifs/Rocket.gif')}></img>
          </div>
        </section>
        <section className="maincontent">
          <div className="game-editor">
            <GetAddGames getGamesClick={this.getGames} 
            addGameClick={this.addGame} 
            deleteGameClick={this.deleteGame} 
            editGameClick={this.editGame}
            currentGames={this.state.games}/>
          </div>
          <div className="gameinfo">
            <GameInfo gbGameID={this.state.selectedExtGameID} 
            selectGameTitle={this.state.selectedGameTitle}
            selectGameDescription={this.state.selectedGameDescription}
            selectGameImage={this.state.selectedGameImageURL}/>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
