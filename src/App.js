import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {
  PageHeader,
  Modal
} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <PageHeader>
          <span>React Bootstrap is wired up correctly</span>
        </PageHeader>
        <Modal show={true}>
          <p>This is a paragraph in the modal</p>
        </Modal>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
