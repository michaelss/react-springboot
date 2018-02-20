import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ListaFuncionario from './componentes/funcionario/ListaFuncionario';
import NovoFuncionario from './componentes/funcionario/NovoFuncionario';
import Inicial from  './Inicial';

ReactDOM.render(
    <Router>
        <App>
            <Route exact path="/" component={Inicial} />
            <Route path="/funcionarios" component={ListaFuncionario} />
            <Route path="/novo" component={NovoFuncionario} />
        </App>
    </Router>,
    
    document.getElementById('root'));
registerServiceWorker();
