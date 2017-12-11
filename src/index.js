import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

// import App from './components/app';
import reducers from './reducers';

import {BrowserRouter , Route, Switch } from  'react-router-dom';

import  Postindex from './components/post_index';
import  Postnew from './components/post_new';
import  Postshow from './components/post_show';


import promise from 'redux-promise';

// acts an gatekkeper for the
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  <BrowserRouter>
      <div>
          <Switch>
          <Route  path='/posts/new' component={Postnew}   />
              <Route  path='/posts/:id' component={Postshow}   />
          <Route  path='/' component={Postindex}   />
          </Switch>

      </div>
  </BrowserRouter>
  </Provider>


  , document.querySelector('.container'));
