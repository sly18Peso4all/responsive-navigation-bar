import { Link } from "react-router-dom";
import { VscClose } from "react-icons/vsc";

const SideDrawer = ({ handleToggle }) => {
  return (
    <>
      <ul className="sidedrawer__items" onClick={handleToggle}>
        <li className="sidedrawer__item">
          <Link to="#">
            <VscClose size="30" />
          </Link>
        </li>
        <li className="sidedrawer__item">
          <Link to="/" className="sidedrawer__link">
            Home
          </Link>
        </li>
        <li className="sidedrawer__item">
          <Link to="/product" className="sidedrawer__link">
            Products
          </Link>
        </li>
        <li className="sidedrawer__item">
          <Link to="/about" className="sidedrawer__link">
            About
          </Link>
        </li>
        <li className="sidedrawer__item">
          <Link to="/more" className="sidedrawer__link">
            More
          </Link>
        </li>
      </ul>
    </>
  );
};

export default SideDrawer;
