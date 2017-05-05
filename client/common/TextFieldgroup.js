import React from 'react';

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
  // placeholder: React.PropTypes.stirng.isRequired,
  // name: React.PropTypes.stirng.isRequired,
  value: React.PropTypes.stirng.isRequired,
  label: React.PropTypes.stirng.isRequired,
  type: React.PropTypes.stirng.isRequired,
  onChange: React.PropTypes.func.isRequired
};

TextFieldGroup.defaultProps = {
  type: 'text'
};

export default TextFieldGroup;
