import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NovoFuncionario extends Component {

    constructor() {
        super();
        this.state = {
            nome: '',
            email: ''
        };
    }

    trataAlteracao(nomeInput, evento) {
        this.setState({[nomeInput]: evento.target.value});
    }

    enviar(evento) {
        evento.preventDefault();

        fetch('/funcionarios', {
            method: 'POST',
            body: JSON.stringify({nome: this.state.nome, email: this.state.email}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Cadastro de Funcionário</h1>
                <form onSubmit={this.enviar.bind(this)}>
                    <label htmlFor="nome">Nome:</label>
                    <input id="nome" type="text" onChange={this.trataAlteracao.bind(this, 'nome')} />
                    
                    <br/>

                    <label htmlFor="email">Email:</label>
                    <input id="email" type="text" onChange={this.trataAlteracao.bind(this, 'email')} />

                    <br/>

                    <button type="submit">Enviar</button>
                </form>
            </div>
        );
    }
}