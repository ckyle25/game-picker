import React, {Component} from 'react';
import axios from 'axios';
import './gameInfo.css'

class GameInfo extends Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     gameTitle: '',
  //     gameDescription: ''
  //   }
  // }

// getGameInfo = (gameID) => {
//   axios.get('http://www.giantbomb.com/api/game/' + gameID + '/?api_key=b016ac3d46ccfa9ced1a62719e40c70a5bfd8191 ')
//     .then(res => {
//       this.setState({
//         gameTitle: res.name,
//         gameDescription: res.description
//       })
//     })
// }

  render() {
    return(
      <div>
        <h1 className='headerInfoTextStyle'>{this.props.selectGameTitle}</h1>
        <div className='contentContainer'>
          <img src={this.props.selectGameTitle === 'No Game Selected'? require('../Thumbs/no-box-art.jpg') : this.props.selectGameImage} alt={require('../Thumbs/no-box-art.jpg')}></img>
          <p className  ='descriptionTextStyle'>{this.props.selectGameDescription}</p>
          {}
        </div>
      </div>
    );
  }
}

export default GameInfo;
