import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';

function App() {
  return (
      <BrowserRouter>
          <Switch>
              <Route exact path='/login' component={Login} />
              <Route exact path='/register' component={Register} />
              <Route path='/user' component={Home} />
              <Route path='/' component={Welcome} />
          </Switch>
      </BrowserRouter>
  );
}

export default App;
