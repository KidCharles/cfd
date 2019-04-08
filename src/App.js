import React, { Component } from 'react';
import './reset.css';
import Nav from './Components/Nav/Nav.js';
import Button from './Components/Button/Button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         {/* <p>Hi</p> */}
         <Nav/>
         <Button/>
        </header>
      </div>
    );
  }
}

export default App;
