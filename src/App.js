import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {nome: 'TRE', email: ''};
  }

  trataAlteracao(nomeInput, evento) {
    this.setState({[nomeInput]: evento.target.value}); 
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {this.state.nome} - {this.state.email}
        </p>
        <div>
          <label htmlFor="entrada">Nome:</label>
          <input id="entrada" type="text" value={this.state.nome} onChange={this.trataAlteracao.bind(this, 'nome')} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input id="email" type="text" value={this.state.email} onChange={this.trataAlteracao.bind(this, 'email')} />
        </div>
      </div>
    );
  }
}

export default App;
