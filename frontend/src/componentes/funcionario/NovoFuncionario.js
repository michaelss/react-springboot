import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

export default class NovoFuncionario extends Component {

    constructor() {
        super();
        this.state = {
            nome: '',
            email: '',
            sucesso: false
        };
    }

    trataAlteracao(nomeInput, evento) {
        this.setState({[nomeInput]: evento.target.value});
    }

    enviar(evento) {
        evento.preventDefault();

        const requestInfo = {
            method: 'POST',
            body: JSON.stringify({nome: this.state.nome, email: this.state.email}),
            headers: {
                'Content-Type': 'application/json'
            }
        };

        fetch('/funcionarios', requestInfo)
            .then(resposta => {
                if (resposta.status === 200) {
                    this.setState({sucesso: true});
                }
            })
        ;
    }

    render() {
        if (this.state.sucesso) {
            return <Redirect to="/funcionarios" />;
        }

        return (
            <div>
                <h1>Cadastro de Funcionário</h1>

                <Link to="/funcionarios">Voltar</Link>

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