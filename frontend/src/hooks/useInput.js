import { useState } from 'react';

const useInput = (initialValue) => {
  // Initialize useState
  const [value, setValue] = useState(initialValue);
  // Create changeHandler for input form
  const changeHandler = e => {
    console.log('e');
    console.log(e);
    console.log('e.target');
    console.log(e.target);
    setValue(e.target?.value);
  }

  return [value, changeHandler];
}

export default useInput;
