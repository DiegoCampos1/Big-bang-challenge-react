import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Components/Header';
import Inicio from './Pages/Inicio';
import Blog from './Pages/Blog';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Inicio} />
        <Route exact path="/BLOG" component={Blog} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
