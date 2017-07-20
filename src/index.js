import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import {Router ,Route,browserHistory } from 'react-router';
import  { firebaseApp } from  './firebase';
import SignIn from './components/SignIn';
import Signup from './components/SignUp';
import reducer from './reducers';
import  {logUser} from './actions';

const store = createStore(reducer);


firebaseApp.auth().onAuthStateChanged(user => {
    if (user) {
        console.log('user has signed in or up',user);
        const {email } = user;
         store.dispatch(logUser(email));
        browserHistory.push('/app');
    } else {
        console.log('user has signed out or still needs to sign in.')
        browserHistory.replace('/signin');
    }
})



ReactDOM.render(
    <Provider store={store}>
        <Router path="/"  history={browserHistory}>
        <Route path ="/app" component={App}/>
        <Route path ="/signin" component ={SignIn}/>
        <Route path ="/signUp" component={Signup} />
        </Router>
    </Provider>
  ,document.getElementById('root')

)
