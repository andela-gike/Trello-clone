import React from 'react';
import PropTypes from 'prop-types';

const TextFieldGroup = ({ placeholder, name, value, label, type, onChange }) => {
  return (
   <div className="form-group">
      <label className="control-label">{label}</label>
            <input
              placeholder={placeholder}
              className="form-control"
              type={type}
              name={name}
              value={value}
              onChange={onChange}
            />

          </div>
  );
};

TextFieldGroup.propTypes = {
  // placeholder: PropTypes.string.isRequired,
  // name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

TextFieldGroup.defaultProps = {
  type: 'text'
};

export default TextFieldGroup;
