import React, { PropTypes } from 'react';
import './SignUpForm.css';

/**
 * class
 * @class
 */
class SignupForm extends React.Component {
  /**
   * @constructor
   * @param {object} props
   */
  constructor(props) {
    super(props);
    this.state = {
      fullname: '',
      email: '',
      username: '',
      password: '',
      isLoading: false
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  getInitialState() {
    return { email: '' };
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.props);
    this.setState({ isLoading: true });
    this.props.SignupformRequest(this.state).then(() => {
      this.props.addFlashMessage({
        type: 'success',
        text: 'Thanks! Your request to create a new user was successfuly!'
      });
      this.context.router.push('/');
    },
      ({ data }) => this.setState({ isLoading: false }));
    console.log(this.state);
  }

  render() {
    return (
      <div className="Signup-Form">
        <div className="SignUp-Form-Header">
          <span className="SignUp-Form-Header-Title">Create a Trello Clone Account</span>
        </div>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label className="control-label" htmlFor="fullname">FullName</label>
            <input
              placeholder="e.g., Gracious Ike"
              className="form-control"
              type="text"
              name="fullname"
              value={this.state.fullname}
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
            <label className="control-label" htmlFor="userame">UserName</label>
            <input
              placeholder="e.g., Graciousdelight"
              className="form-control"
              type="text"
              name="username"
              value={this.state.username}
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
          <button type="submit" disabled={!this.state.email} className="SignUp-Form-SubmitButton form-group">Create a New Account</button>
        </form>
      </div>
    );
  }
}

SignupForm.propTypes = {
  SignupformRequest: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired,
};

SignupForm.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default SignupForm;
