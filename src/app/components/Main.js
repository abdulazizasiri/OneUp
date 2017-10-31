import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import SignIn from './SignIn';
import Profile from './Profile';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/signin' component={SignIn}/>
      <Route path='/profile' component={Profile}/>
    </Switch>
  </main>
)

export default Main
