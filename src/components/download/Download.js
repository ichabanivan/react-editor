import React, { Component } from 'react';
import './Download.css';

class Download extends Component {
  state = {
    html : ''
  }
  
  render() {
    return (
      <div id="save">
        <a 
          id="downloadBtn" 
          href={"data:text/plain;charset=utf-8,%EF%BB%BF" + encodeURIComponent(this.state.html)}
          download="text.html"
        >
          text.html
        </a>
      </div>
    );
  }
}

export default Download;
