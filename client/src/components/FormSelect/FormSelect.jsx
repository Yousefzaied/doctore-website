// components/FormSelect.js
import React from 'react';

const FormSelect = ({ label, name, valueKey, labelKey, options, onChange }) => (
  <div className="mb-3">
    <select
      name={name}
      onChange={onChange}
      className="form-select"
      aria-label="Default select example"
    >
      <option value="">{label}</option>
      {options.map((item, index) => (
        <option key={index} value={item[valueKey]}>
          {item[labelKey] || item[valueKey]}
        </option>
      ))}
    </select>
  </div>
);

export default FormSelect;
