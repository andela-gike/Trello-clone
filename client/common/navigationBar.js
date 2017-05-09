import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { logout } from '../actions/loginActions';

 /**
 * class
 * @class
 */
class NavigationBar extends React.Component {

  /**
 * logout user
 * @param {object} e
 * @returns {function} that make the logout link work
 */
  logout(e) {
    e.preventDefault();
    this.props.logout();
  }

   /**
 * logout user
 * @returns {function} render all the component that show on the navigation bar
 */
  render() {
    const { isAuthenticated } = this.props.login;

    const userLinks = (
      <ul className="nav navbar-nav navbar-right">
        <li><a href="#" onClick={this.logout.bind(this)}>logout</a></li>
      </ul>
    );
    const guestLinks = (
      <ul className="nav navbar-nav navbar-right">
        <li><Link to="/signup">signup</Link></li>
        <li><Link to="/login">login</Link></li>
      </ul>
    );

    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">Trello Clone</Link>
          </div>

          <div className="collapse navbar-collapse">
            { isAuthenticated ? userLinks : guestLinks }
          </div>
        </div>
      </nav>
    );
  }
}


NavigationBar.propTypes = {
  login: React.PropTypes.object.isRequired,
  logout: React.PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    login: state.login
  };
}

export default connect(mapStateToProps, { logout })(NavigationBar);
