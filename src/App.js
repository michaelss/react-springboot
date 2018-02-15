import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      nome: 'TRE',
      email: '',
      itemLista: '',
      lista: []
    };
  }

  trataAlteracao(nomeInput, evento) {
    this.setState({[nomeInput]: evento.target.value}); 
  }

  adiciona(e) {
    e.preventDefault();
    this.setState(estadoAnterior => ({
      lista: estadoAnterior.lista.concat(this.state.itemLista)
    }));
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
          <br/>
          <ul>
          Items da Lista: {this.state.lista.map(item => (<li>{item}</li>))}
          </ul>
        </p>
        <form onSubmit={this.adiciona.bind(this)} >
          <div>
            <label htmlFor="entrada">Nome:</label>
            <input id="entrada" type="text" value={this.state.nome} onChange={this.trataAlteracao.bind(this, 'nome')} />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input id="email" type="text" value={this.state.email} onChange={this.trataAlteracao.bind(this, 'email')} />
          </div>
          <div>
            <label htmlFor="lista">Lista:</label>
            <input id="lista" type="text" value={this.state.itemLista} onChange={this.trataAlteracao.bind(this, 'itemLista')} />
            <button type="submit">Enviar</button>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
