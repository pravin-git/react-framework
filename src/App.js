import React, { Component } from 'react';
import { BrowserRouter, Route  } from 'react-router-dom';
import { connect } from 'react-redux';

import Home from './components/home';
import Login from './components/login';


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <BrowserRouter>
            <div>
                <Route exact path="/" component={Login} />
                <Route exact path="/Home" component={Home} />
            </div>
        </BrowserRouter>
      </div>  
    );
  }
}


export default App;


