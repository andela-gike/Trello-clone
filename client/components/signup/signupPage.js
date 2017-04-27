import React from 'react';
import SignupForm from './signupForm';


class SignupPage extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-6">
          <SignupForm />
        </div>
      </div>
    );
  }
}

export default SignupPage;
