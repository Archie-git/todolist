import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';

function App() {
  return (
      <BrowserRouter>
          <Switch>
              <Route exact path='/' component={Welcome} />
              <Route path='/login' component={Login} />
              <Route path='/register' component={Register} />
              <Route path='/home' component={Home}/>
              <Redirect from='*' to='/' />
          </Switch>
      </BrowserRouter>
  );
}

export default App;
