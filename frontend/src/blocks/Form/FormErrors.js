import React from 'react'

const FormErrors = ({className, errors}) =>  {
  return (
    <div className="form-errors">
      <ul className={className}>
        {errors.map( (error, idx) => <li key={idx}>{error}</li>)}
      </ul>
    </div>
  );
};

export default FormErrors;
