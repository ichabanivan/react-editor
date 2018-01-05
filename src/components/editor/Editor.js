import React, { Component } from 'react';
import './Editor.css';

class Editor extends Component {
  state = {
    html: 'Hello'
  }

  setCommand = (aCommandName, aValueArgument, aShowDefaultUI) => {
    aShowDefaultUI = aShowDefaultUI || false;
    aValueArgument = aValueArgument || null;
    document.execCommand(aCommandName, aShowDefaultUI, aValueArgument);
  }

  handleInput = (e) => {
    console.log('Input', e.target.innerHTML)
  }

  render() {
    return (
      <div onInput={this.handleInput} contentEditable="true" id="editor" className="editor">{this.state.html}</div>
    );
  }
}

export default Editor;
