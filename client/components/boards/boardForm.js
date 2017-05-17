import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ReactPageClick } from 'react-page-click';

const styles = {
  popup: {
    position: 'fixed',
    left: '20%',
    width: '20%',
    height: '50%',

    fontSize: 15,
    textAlign: 'center',

    background: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 10
  },
  shade: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0, 0, 0, 0.3)'
  },
  content: {
    padding: 10
  },
  label: {
    fontWeight: 700,
    marginRight: '80%'
  },

  style: {
    width: '90%',
    margin: 15
  },
};
/**
 * class
 * @class
 */
class BoardForm extends Component {
   /**
   * @constructor
   * @param {object} props
   */
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      errors: {},
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
    this.props.boardformRequest(this.state).then(
      (res) => {
        this.context.router.push('/');
        // toastr.success('Logged in Successfully!');
      },
        err => this.setState({
          errors: err.response.data.errors,
        })
      );
  }



  render() {
    return (
      <div>
        <div style={styles.shade} />
        <ReactPageClick>
          <div className="board form" style={styles.popup}>
            <div style={styles.content} />
            <div className="inner" >
              <h4>Create board</h4>
              <form id="new_board_form" onSubmit={this.onSubmit}>
                <label style={styles.label}>Title</label>
                <input
                  name="title"
                  type="text" placeholder=" like 'Vacation Planning' for example"
                  required="true" style={styles.style}
                  onChange={this.onChange}
                  value={this.state.title}
                />
                <button type="submit">Create board</button> or <a href="#">cancel</a>
              </form>
            </div>
          </div>
        </ReactPageClick>
      </div>
    );
  }
}

BoardForm.propTypes = {
  boardformRequest: PropTypes.func.isRequired
};

BoardForm.contextTypes = {
  router: PropTypes.object.isRequired
};

export default BoardForm;
