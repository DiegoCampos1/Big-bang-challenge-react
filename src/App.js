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
          <Route exact path="/BLOG" component={Blog} />
          <Route exact path="/PODCASTS" component={Podcasts} />
          <Route exact path="/CURSOS" component={Cursos} />
          <Route exact path="/CONTATO" component={Contato} />
          <Route exact path="/LOJA" component={Loja} />
        </Switch>
        <div className="push" />
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
