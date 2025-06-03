// components/FormInput.js
import React from 'react';

const FormInput = ({ label, type, id, name, placeholder, onChange }) => (
  <div className="mb-3">
    <label htmlFor={id} className="form-label">{label}</label>
    <input
      type={type}
      className="form-control"
      id={id}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
    />
  </div>
);

export default FormInput;
