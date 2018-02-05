import React, {Component} from 'react';
import '../reset.css';
import './titlebutton.css'

class TitleButton extends Component {
handleClick = () => {
  this.props.onClickUpdate()
}


  render() {
    return(
      <button className="titleButton btnBorder btnLightBlue" 
      onClick={this.handleClick}>Pick a Game</button>
    );
  }
}

export default TitleButton;
