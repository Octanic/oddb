import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Pages/Home';
import { BrowserRouter, Switch, Route }  from 'react-router-dom';
import CadastroVideo from './Pages/Cadastro/Video';
import PageNotFound from './Pages/PageNotFound';
import CadastroCategoria from './Pages/Cadastro/Categoria';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={PageNotFound} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

