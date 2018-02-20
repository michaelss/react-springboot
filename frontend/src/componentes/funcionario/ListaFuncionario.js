import React, { Component } from 'react';

export default class ListaFuncionario extends Component {

    constructor() {
        super();
        this.state = {
            funcionarios: []
        };
    }

    componentDidMount() {
        fetch('/funcionarios')
            .then(resp => {
                if (resp.status === 200) {
                    return resp.json()
                }
                return []
            })
            .then(json => this.setState({funcionarios: json}))
    }

    enviar(e) {
        e.preventDefault();

        const requestInfo = {
            method: 'POST',
            body: JSON.stringify({nome: 'XYZ', email: 'xyz@gmail.com'}),
            headers: {
                'Content-Type': 'application/json'
            }
        };

        fetch('/funcionarios', requestInfo)
            .then(response => {
                if (response.status === 200) {
                    this.setState({msg: 'Inserido'});
                }
            })
            .catch(erro => {
                this.setState({msg: 'Erro'});
            });
    }

    render() {
        return (
            <div>
                <h1>Lista de Funcionários</h1>
                <ul>
                    {this.state.funcionarios.map(f => <li>{f.nome}</li>)}
                </ul>
                <form onSubmit={this.enviar.bind(this)}>
                    <button type="submit">Cadastrar</button>
                </form>
            </div>
        );
    }

}