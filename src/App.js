import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Components/Header';
import Inicio from './Pages/Inicio';
import Blog from './Pages/Blog';
import Podcasts from './Pages/podcasts';
import Cursos from './Pages/Cursos';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Inicio} />
        <Route exact path="/BLOG" component={Blog} />
        <Route exact path="/PODCASTS" component={Podcasts} />
        <Route exact path="/CURSOS" component={Cursos} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
