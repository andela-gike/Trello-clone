import React from 'react';
import LoginForm from './loginForm';


class LoginPage extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-6">
          <LoginForm />
        </div>
      </div>
    );
  }
}

export default LoginPage;
