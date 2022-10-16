import { useEffect, useState } from 'react';

const InputElement = (props) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    if (props.value) setValue(props.value);
  }, [props.value]);


  const handleChange = (event) => {
    setValue(event.target.value);
    if (props.onChange) props.onChange(event);
  };

  return <input {...props} onChange={handleChange} value={value} />;
};

export default InputElement;
