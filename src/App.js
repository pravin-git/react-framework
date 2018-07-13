import React, { Component } from 'react';
import { BrowserRouter, Route  } from 'react-router-dom';
import { connect } from 'react-redux';
import { PrivateRoute } from './common/privateRoute';

import Home from './components/home';
import Login from './components/login';
import Register from './pages/register';

class App extends Component {
 
  render() {
    return (
      <div>
        <BrowserRouter>
            <div>
                <PrivateRoute exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <PrivateRoute exact path="/user" component={Login} />
            </div>
        </BrowserRouter>
      </div>  
    );
  }
}


export default App;


