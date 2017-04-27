import React from 'react';
import './LoginForm.css';


class LoginForm extends React.Component {
  render() {
    return (
      <div className="Login-Form">
        <div className="Login-Form-Header">
          <span className="Login-Form-Header-Title">Log in to Trello Clone</span>
        </div>
        <form>
          <div className="form-group">
            <label className="control-label" htmlFor="email">email
              <span className="quiet"> (or username)</span>
            </label>
            <input
              placeholder="e.g., grace.ike@gmail.com"
              className="form-control"
              type="text"
              name="email"
              value=""
            />

          </div>
          <div className="form-group">
            <label className="control-label" htmlFor="password">password</label>
            <input
              placeholder="e.g., ............."
              className="form-control"
              type="password"
              name="password"
              value=""
            />

          </div>
          <button type="submit" className="Login-Form-SubmitButton"> Log in </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
