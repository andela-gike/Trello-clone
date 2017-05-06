import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import LoginForm from './loginForm';
import { LoginformRequest } from '../../actions/loginActions';

class LoginPage extends React.Component {
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

