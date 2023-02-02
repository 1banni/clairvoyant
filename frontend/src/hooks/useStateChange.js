import { useState } from 'react';

const useStateChange = (initialValue) => {
  // Initialize useState
  const [value, setValue] = useState(initialValue);
  // Create changeHandler for input form
  const handleValue = e => {
    setValue(e.target?.value);
  }

  return [value, setValue, handleValue];
}

export default useStateChange;
