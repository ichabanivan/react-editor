import React, { Component } from 'react';
import './Editor.css';

class Editor extends Component {

  setCommand = (aCommandName, aValueArgument, aShowDefaultUI) => {
    aShowDefaultUI = aShowDefaultUI || false;
    aValueArgument = aValueArgument || null;
    document.execCommand(aCommandName, aShowDefaultUI, aValueArgument);
  }

  handleInput = () => {
    console.log('Input')
  }

  render() {
    return (
      <div onInput={this.handleInput} contentEditable="true" id="editor" className="editor"></div>
    );
  }
}

export default Editor;
