import React, { Component } from "react";
import ChangeColorButton from './ChangeColorButton';

export default class ColoredBlock extends Component {
  render() {
    return (
      <div style={{height: '200px', width: '200px', backgroundColor: 'red'}}>
        <ChangeColorButton></ChangeColorButton>
      </div>
    );
  }
}