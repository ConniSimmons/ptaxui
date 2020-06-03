import React, {Component as RC } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route, 
  Link
} from 'react-router-dom';
import SecureRoute from './components/SecureRoute';
import './App.scss';
import Login from "./pages/Login";
import SubmitEmail from './pages/SubmitEmail';
import SubmitItem from './pages/SubmitItem';
import Products from './pages/Products';
import Home from './pages/Home';
import {LoggedInContext, LoggedInUserContext} from './Context';

class App extends RC {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      loggedInUser: {},
      appName: 'PTax',
    };
  }
  logmein = event => {
    console.log("logging in");
    event.preventDefault();
    this.setState({
      loggedIn: true,
      loggedInUser: {
        //TODO API keys go here!!!
      },
    });
  };
  logmeout = () => {
    this.setState({
      loggedIn: false
    });
  };
  render() {
    return (
      <Router>
         <Switch>
            <LoggedInContext.Provider value={this.state.loggedIn}>
            <LoggedInUserContext.Provider value={this.state.loggedInUser}>
            <SecureRoute exact path="/submititem" component={SubmitItem} />
            </LoggedInUserContext.Provider>
            <Route exact path="/login" component = {Login} />
            <Route exact path="/" component={Home} />
            <Route exact path="/submitemail" component={SubmitEmail} />
            <Route exact path="/products" component={Products} />
            </LoggedInContext.Provider>
        </Switch>
        )
      </Router>
    );
  }
}

export default App;