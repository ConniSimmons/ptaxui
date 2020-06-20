import React, { Component as RC } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route, 
    Link,
    Redirect,
} from 'react-router-dom';
import config from './config'
import SecureRoute from './components/SecureRoute';
import './App.scss';
import Login from "./pages/Login";
import SubmitEmail from './pages/SubmitEmail';
import SubmitItem from './pages/SubmitItem';
import Products from './pages/Products';
import Home from './pages/Home';
import { 
  LoggedInContext, 
  LoggedInUserContext
} from './Context';

class App extends RC {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      loggedInUser: {},
      appName: 'PTax',
    };
  }

   // fetch ANY model from our API
   fetchModel = (model = '') => {
    // if this function is called without a valid model, return null
    if (typeof model !== 'string' || model === '') {
        return null;
    }

    let route = `${config.apiPath}/api/${model}`;
    fetch(route)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            // we don't know the model name so we will set it programatically
            // create an empty object
            const stateObj = {};
            // set the key name using [] notation
            stateObj[model] = data;
            // feed that object to setState
            this.setState(stateObj);
        })
        .catch((err) => {
            console.log('Error fetching classes: ', err);
        });
};

  logmein = (event) => {
    event.preventDefault();
    const [username, password, submit] = [].slice.call(event.target.elements);
    const route = `${config.apiPath}/login`;
    const body ={username: username.value, password: password.value};
    const fetchOptions = {
      headers: {
        'Content-Type: ': 'app.json' 
      }
    }
    fetch(route)
    .then((response) => {
      return response.json();
    })
    .then((data) => {  
      console.log('data: ', data);
    })
  };
  logmeout = () => {
    this.setState({
      loggedIn: false
    });
  };

  //TODO This may come in handy when the products database is functional.
  componentDidMount() {
    // get classes right at the start
   //  this.fetchModel('classes');
    // get races right at the start
    // this.fetchModel('races');
  }
  

  render() {
    return (
      <Router>
        <Switch>
          
            <LoggedInContext.Provider value={this.state.loggedIn}>
              <LoggedInUserContext.Provider value={this.state.loggedInUser}>
              </LoggedInUserContext.Provider>
              <Route exact path="/login" component = {Login} />
              <Route exact path="/" component={Home} />
              <Route exact path="/submitemail" component={SubmitEmail} />
              <Route exact path="/products" component={Products} />
              <SecureRoute exact path="/submititem" component={SubmitItem} />
              </LoggedInContext.Provider>        
        </Switch>
      </Router>
    );
  }
}



export default App;