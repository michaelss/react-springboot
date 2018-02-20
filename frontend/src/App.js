import React, { Component } from 'react';
import './App.css';
import Cabecalho from './componentes/Cabecalho';

class App extends Component {

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
