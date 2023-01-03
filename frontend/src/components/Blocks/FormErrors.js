import React from 'react'

const FormErrors = ({className, errors}) =>  {
  console.log('form errors')
  console.log(errors);
  return (
    <>
      <ul className={className}>{errors.map( (error, idx) => <li key={idx}>{error}</li>)}</ul>
    </>
  );
};

export default FormErrors;
