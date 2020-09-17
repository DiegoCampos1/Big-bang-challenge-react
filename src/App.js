import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Components/Header';
import Inicio from './Pages/Inicio';
import Blog from './Pages/Blog';
import Podcasts from './Pages/podcasts';
import Cursos from './Pages/Cursos';
import Contato from './Pages/Contato';
import Footer from './Components/Footer';
import Loja from './Pages/Loja';

function App() {
  return (
    <BrowserRouter>
      <div className="wraper">
        <Header />
        <Switch>
          <Route exact path="/" component={Inicio} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/podcasts" component={Podcasts} />
          <Route exact path="/cursos" component={Cursos} />
          <Route exact path="/contato" component={Contato} />
          <Route exact path="/loja" component={Loja} />
        </Switch>
        <div className="push" />
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
