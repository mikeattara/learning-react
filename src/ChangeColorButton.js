import React, { Component } from 'react';

export default class ChangeColorButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  changeColor() {
    this.setState(
      (prevState, props) => ({
        color: prevState === 'red' ? 'blue' : 'red'
      })
    )
  }

  handleClick() {
    this.props.clickHandler();
    console.log('Clicked!');
  }

  render() {
    return <button onClick={this.handleClick}>I dont't like {this.props.currentColor}</button>;
    }
}