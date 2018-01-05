import React, { Component } from 'react';

import Options from "./../components/options/Options";
import Download from "./../components/download/Download";
import Editor from "./../components/editor/Editor";
import Result from "./../components/result/Result";

import './App.css';

class App extends Component {
  state = {
    html: ''
  }

  handleBold = () => {
    console.log('bold')
  }

  handleItalic = () => {
    console.log('italic')
  }

  handleUnderline = () => {
    console.log('underline')
  }

  changeHeading = (e) => {
    var heading = e.target.value; // h1-h6

    // Reset
    e.target.value = 0;

    console.log('heading')
    console.log(heading)
  }

  render() {
    return (
      <div className="App">
        <Options 
          handleBold={this.handleBold}
          handleItalic={this.handleItalic}
          handleUnderline={this.handleUnderline}
          changeHeading={this.changeHeading}
        />
        <Editor /> 
        <Download />
        <Result>{this.state.html}</Result>
      </div>
    );
  }
}

export default App;
