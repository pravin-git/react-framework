import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { reduxForm, Field, SubmissionError } from 'redux-form';
import { signUpUser } from '../actions/userActions';

//Client side validation
function validate(values) {
  var errors = {};
  var hasErrors = false;

  
  return hasErrors && errors;
}

//For any field errors upon submission (i.e. not instant check)
const validateAndSignUpUser = (values, dispatch) => {
    console.log(values);
    return dispatch(signUpUser(values))
};


class SignUpForm extends Component {
 
  componentWillMount() {
  }

  componentWillReceiveProps(nextProps) {
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="col-md-6 col-md-offset-3">
        <h2>Register</h2>
        <form onSubmit={ handleSubmit(validateAndSignUpUser) }>
          <div className ='form-group'>
              <label htmlFor="firstname">Name</label>
              <Field name="firstname" type="text" component= "input"/>
          </div>
          <div className ='form-group'>
              <label htmlFor="username">Username</label>
              <Field name="name" type="text" component= "input"/>
          </div>
          <div className ='form-group'>
              <label htmlFor="password">Password</label>
              <Field name="password" type="text" component= "input"/>
          </div>
          <div className="form-group">
              <button className="btn btn-primary">Register</button>
              <Link to="/" className="btn btn-error"> Cancel </Link>
          </div>
      </form>
     </div>
    )
  }
}

export default reduxForm({
  form: 'SignUpForm', // a unique identifier for this form
  validate
})(SignUpForm)

