import React, { Component } from 'react';

export default class ChangeColorButton extends Component {
  handleClick() {
    console.log('Clicked!');
  }

  render() {
    return <button onClick={this.handleClick}>Change the color</button>;
    }
}