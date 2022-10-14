import { Link } from 'react-router-dom';

const MenuComponent = () => {
  return (
    <ul>
      <li>
        <Link to={'/'}>Index</Link>
      </li>
      <li>
        <Link to={'another'}>Another</Link>
      </li>
    </ul>
  );
};

export default MenuComponent;
