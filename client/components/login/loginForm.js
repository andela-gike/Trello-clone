import React, { PropTypes } from 'react';
import './LoginForm.css';


class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {},
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
    this.setState({ errors: {}, isLoading: true });
    this.props.LoginformRequest(this.state).then(
      (res) => {
        this.context.router.push('/');
        // toastr.success('Logged in Successfully!');
      },
        err => this.setState({
          errors: err.response.data.errors, isLoading: false
        })
      );
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="Login-Form">
        <div className="Login-Form-Header">
          <span className="Login-Form-Header-Title">Log in to Trello Clone</span>
        </div>
        <form onSubmit={this.onSubmit}>
          {errors.form && <div className="alert alert-danger">{errors.form}</div> }
          <div className="form-group">
            <label className="control-label" htmlFor="email">email
              <span className="quiet"> (or username)</span>
            </label>
            <input
              placeholder="e.g., grace.ike@gmail.com"
              className="form-control"
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.onChange}
              checked={errors.email}
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
              checked={errors.password}
            />

          </div>
          <button type="submit" disabled={!this.state.email} className="Login-Form-SubmitButton"> Log in </button>
        </form>
      </div>
    );
  }
}

LoginForm.propTypes = {
  LoginformRequest: React.PropTypes.func.isRequired
};

LoginForm.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default LoginForm;
