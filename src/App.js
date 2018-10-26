import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css'
import './index.css'
import Board from './components/board/'
import Toolbar from './components/toolbar/'
import '@fortawesome/fontawesome-free/css/all.css'

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <Toolbar></Toolbar>
          <Board>
          </Board>
        </div>
        <div id="flow-container">
          <div id="flow">
            <span className="flow-1"></span>
            <span className="flow-2"></span>
            <span className="flow-3"></span>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
