import React, { Component } from "react";
import ChangeColorButton from './ChangeColorButton';

export default class ColoredBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: 'red'
    };
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor() {
    let newColor = this.state.color === 'red' ? 'blue' : 'red';
    this.setState(
      {
        color: newColor
      }
    )
  }

  render() {
    return (
      <div style={{height: '200px', width: '200px', backgroundColor: this.state.color}}>
        <ChangeColorButton clickHandler={this.changeColor} currentColor={this.state.color}/>
      </div>
    );
  }
}