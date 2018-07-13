import React, { Component } from 'react';
import { connect } from 'react-redux';

import RegisterContainer  from '../containers/registerContainer'


class Register extends Component {
  
  render() {
    return (
      <div>
        <RegisterContainer/>
      </div>  
    );
  }
}

export default Register
