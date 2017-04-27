import React from 'react';
import { connect } from 'react-redux';
import SignupForm from './signupForm';
import { SignupformRequest } from '../../actions/signupActions';



class SignupPage extends React.Component {
  render() {
    const { SignupformRequest } = this.props;
    return (
      <div className="row">
        <div className="col-md-6">
          <SignupForm SignupformRequest={SignupformRequest} />
        </div>
      </div>
    );
  }
}

SignupPage.proptypes = {
  SignupformRequest: React.PropTypes.func.isRequired
};

export default connect(null, { SignupformRequest })(SignupPage);
