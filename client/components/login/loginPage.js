import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LoginForm from './loginForm';
import { LoginformRequest } from '../../actions/loginActions';

/**
 * class
 * @class
 */
class LoginPage extends Component {
  render() {
    const { LoginformRequest } = this.props;
    return (
      <div className="row">
        <div className="col-md-6">
          <LoginForm
            LoginformRequest={LoginformRequest}
          />
        </div>
      </div>
    );
  }
}

LoginPage.propTypes = {
  LoginformRequest: PropTypes.func.isRequired
};

export default connect(null, { LoginformRequest })(LoginPage);

