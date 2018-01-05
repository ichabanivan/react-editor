import React, { Component } from 'react';
import './Options.css';
import Button from "../elements/Button";
import Select from "../elements/Select";

class Options extends Component {
  render() {
    return (
      <div className="options">
        <Button handleClick={this.props.handleBold} cssClass='bold'>Bold</Button>
        <Button handleClick={this.props.handleItalic} cssClass='italic'>Italic</Button>
        <Button handleClick={this.props.handleUnderline} cssClass='underline'>Underline</Button>
        <Select changeHeading={this.props.changeHeading}/>
      </div>
    );
  }
}

export default Options;
