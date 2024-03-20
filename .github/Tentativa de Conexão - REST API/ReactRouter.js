import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import pagina_inicial from './pagina_inicial'
import InserirExame from './InserirExame';
import CadastrarExame from './CadastrarExame';
import UploadResultado from './UploadResultado';
import ListarExames from './ListarExames';

// Trocar o nome das variáveis de importação //

function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/pagina_inicial" component={pagina_inicial} />
                    <Route exact path="/inserir_exame" component={InserirExame} />
                    <Route exact path="/upload_resultado" component={UploadResultado} />
                    <Route exact path="/listar_exames" component={ListarExames} />
                    <Route exact path="/cadastrar_exame" component={CadastrarExame} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;