import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signUpUser } from '../actions/userActions';

import Register from '../components/register';

function mapStateToProps(state) {
    return { 
      user: state.user
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onRegister: (user) =>{
            console.log('------------');
            console.log(ownProps);
            console.log(user);
            console.log('------------');
            dispatch(signUpUser(user))
            .then((result) =>{
                console.log(result);
            });
       }
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Register);