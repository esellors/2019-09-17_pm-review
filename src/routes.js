import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Browse from './Components/Browse';
import DogInfo from './Components/DogInfo';

export default (
   <Switch>
      <Route component={Browse} exact path='/' />
      <Route component={DogInfo} path='/:dogId' />
   </Switch>
)