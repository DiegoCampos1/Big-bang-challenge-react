import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Components/Header';
import Inicio from './Pages/Inicio';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Inicio} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
