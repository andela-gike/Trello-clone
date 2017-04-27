import React from 'react';
import './SignUpForm.css';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: '',
      FullName: '',
      email: '',
      password: '',
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.props);
    this.props.SignupformRequest(this.state);
    // console.log(this.state);
  }

  render() {
    return (
      <div className="Signup-Form">
        <div className="SignUp-Form-Header">
          <span className="SignUp-Form-Header-Title">Create a Trello Clone Account</span>
        </div>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label className="control-label" htmlFor="Name">Name</label>
            <input
              placeholder="e.g., Gracious"
              className="form-control"
              type="text"
              name="Name"
              value={this.state.Name}
              onChange={this.onChange}
            />

          </div>
          <div className="form-group">
            <label className="control-label" htmlFor="fullname">FullName</label>
            <input
              placeholder="e.g., Ike Grace"
              className="form-control"
              type="text"
              name="FullName"
              value={this.state.FullName}
              onChange={this.onChange}
            />

          </div>
          <div className="form-group">
            <label className="control-label" htmlFor="email">email</label>
            <input
              placeholder="e.g., grace.ike@gmail.com"
              className="form-control"
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.onChange}
            />

          </div>
          <div className="form-group">
            <label className="control-label" htmlFor="password">password</label>
            <input
              placeholder="e.g., ............."
              className="form-control"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.onChange}
            />

          </div>
          <button type="submit" className="SignUp-Form-SubmitButton form-group">Create a New Account</button>
        </form>
      </div>
    );
  }
}

SignupForm.proptypes = {
  SignupformRequest: React.PropTypes.func.isRequired
};

export default SignupForm;
