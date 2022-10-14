import { useEffect, useState } from 'react';

const SelectElement = (props) => {

  const [selected, setSelected] = useState(props.value | '');

  useEffect(() => {
    setSelected(props.value);
  }, [props.value]);


  const handleChange = (event) => {
    setSelected(event.target.value);
    if (props.onChange) props.onChange(event);
  };

  return (
    <select  {...props} value={selected} onChange={handleChange}>
      {props.children}
    </select>
  );
};

export default SelectElement;
