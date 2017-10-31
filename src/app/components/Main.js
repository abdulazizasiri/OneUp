import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import SignIn from './SignIn';
import UploadVideo from './UploadVideo';
import Profile from './Profile';
import Week from './Week';


const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/signin' component={SignIn}/>
      <Route path='/profile' component={Profile}/>
      <Route path='/uploadvideo' component={UploadVideo}/>
      <Route path='/week' component={Week}/>
    </Switch>
  </main>
)

export default Main
