import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import BoardForm from './boardForm';
import { boardformRequest } from '../../actions/boardActions';

/**
 * class
 * @class
 */
class BoardPage extends React.Component {
  render() {
    const { boardformRequest } = this.props;
    return (
      <div className="row">
        <div className="col-md-6">
          <BoardForm
            boardformRequest={boardformRequest}
          />
        </div>
      </div>
    );
  }
}

BoardPage.propTypes = {
  boardformRequest: PropTypes.func.isRequired
};

export default connect(null, { boardformRequest })(BoardPage);
