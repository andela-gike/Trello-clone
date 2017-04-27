import React from 'react';
import { Link } from 'react-router';

class NavigationBar extends React.Component {
  render() {
  // logout(e) {
  //   e.preventDefault();
  //   this.props.logout();
  // }

    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
          <Link to="/" className="navbar-brand">Trello Clone</Link>
          </div>

          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li><Link to="/signup">signup</Link></li>
              <li><Link to="/login">login</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}


// NavigationBar.propTypes = {
//   auth: React.PropTypes.object.isRequired,
//   logout: React.PropTypes.func.isRequired
// }

// function mapStateToProps(state) {
//   return {
//     auth: state.auth
//   };
// }

export default NavigationBar;
