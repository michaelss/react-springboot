import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ListaFuncionario extends Component {

    constructor() {
        super();
        this.state = {
            msgErro: '',
            funcionarios: []
        };
    }

    componentDidMount() {
        fetch('/funcionarios')
            .then(resposta => {
                if (resposta.status === 200) {
                    return resposta.json()
                }
                throw new Error('Erro no servidor');
            })
            .then(json => {
                this.setState({funcionarios: json});
            })
            .catch(erro => this.setState({msgErro: erro.message}));
    }

    render() {
        let funcionarios = this.state.funcionarios.map(f => 
            <tr>
                <td>{f.nome}</td>
                <td>{f.email}</td>
            </tr>
        );

        return (
            <div>
                <h1>Lista de Funcionários</h1>
                <span><Link to="/novo" >Novo Funcionário</Link></span>
                {this.state.msgErro === '' ||
                    <span style={{color: 'red'}}>{this.state.msgErro}</span>
                }
                <table>
                    <thead>
                        <th><td>Nome</td></th>
                        <th><td>Email</td></th>
                    </thead>
                    <tbody>
                        {funcionarios}
                    </tbody>
                </table>
            </div>
        );
    }

}