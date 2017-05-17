import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SignupForm from './signupForm';
import { SignupformRequest } from '../../actions/signupActions';
import { addFlashMessage } from '../../actions/flashMessages';


class SignupPage extends Component {
  render() {
    const { SignupformRequest, addFlashMessage } = this.props;
    return (
      <div className="row">
        <div className="col-md-6">
          <SignupForm
            SignupformRequest={SignupformRequest}
            addFlashMessage={addFlashMessage}
          />
        </div>
      </div>
    );
  }
}

SignupPage.propTypes = {
  SignupformRequest: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired,
};

export default connect(null, { SignupformRequest, addFlashMessage })(SignupPage);
