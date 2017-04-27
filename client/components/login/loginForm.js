import React from 'react';
import './loginform';

class LoginForm extends React.Component {
  render() {
    return (
      <div className="Login-Form">
        <div className="Login-Form-Header">
          <span className="Login-Form-Header-Title">Log in Trello Clone</span>
        </div>
        <form>
          <div className="form-group">
            <label className="control-label" htmlFor="username">Name</label>
            <input
              placeholder="e.g., Gracious"
              className="form-control"
              type="text"
              name="username"
              value=""
            />

          </div>
          <div className="form-group">
            <label className="control-label" htmlFor="username">FullName</label>
            <input
              placeholder="e.g., Ike Grace"
              className="form-control"
              type="text"
              name="username"
              value=""
            />

          </div>
          <div className="form-group">
            <label className="control-label" htmlFor="username">email</label>
            <input
              placeholder="e.g., grace.ike@gmail.com"
              className="form-control"
              type="text"
              name="username"
              value=""
            />

          </div>
          <div className="form-group">
            <label className="control-label" htmlFor="username">password</label>
            <input
              placeholder="e.g., ............."
              className="form-control"
              type="text"
              name="username"
              value=""
            />

          </div>
          <button type="submit" className="Login-Form-SubmitButton">Create a New Account</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
