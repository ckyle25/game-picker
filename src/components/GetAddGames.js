import React, {Component} from 'react';
import '../reset.css';
import './editGames.css';

class GetAddGames extends Component {

handleGetGamesClick = () => {
  this.props.getGamesClick()
}

handleAddGameClick = () => {
  let addGame = {
    title: this.refs.title.value,
    gbGameID: this.refs.gbID.value
  }
  this.props.addGameClick(addGame)
  this.refs.title.value = ""
  this.refs.gbID.value = ""
}

handleDeleteGameClick = () => {
  let gameToDeleteID = this.refs.gameID.value
  this.props.deleteGameClick(gameToDeleteID)
  this.refs.gameID.value = ""
}

handleEditGameClick = () => {
  let gameToEditID = this.refs.gameID.value
  let gameDetails = {
    title: this.refs.title.value,
    gbGameID: this.refs.gbID.value
  }
  this.props.editGameClick(gameToEditID,gameDetails)
  this.refs.gameID.value = ""
  this.refs.title.value = ""
  this.refs.gbID.value = ""
}

  render() {
    const gameList = this.props.currentGames
    return(
      <div>
        <h1 className='headerTextStyle'>Current Games</h1>
        <div className='gameContainer textStyle'>
        {gameList.map((game) => {return (<div>{game.id} | {game.title}</div>)})}
        </div>

        <button className='editButton btnBorder btnLightBlue' 
        onClick={this.handleGetGamesClick}>Get Games</button>

        <input className='inputStyle' placeholder='Title' ref='title'></input>

        <input className='inputStyle' placeholder='Giant Bomb ID' ref='gbID'></input>

        <button className='editButton btnBorder btnLightBlue' 
        onClick={this.handleAddGameClick}>Add a Game</button>

        <input className='inputStyle' placeholder='Game ID' ref='gameID'></input>

        <button className='editButton btnBorder btnLightBlue' 
        onClick={this.handleEditGameClick}>Edit Game</button>

        <button className='editButton btnBorder btnLightBlue' 
        onClick={this.handleDeleteGameClick}>Delete Game</button>
      </div>
    );
  }
}

export default GetAddGames;
