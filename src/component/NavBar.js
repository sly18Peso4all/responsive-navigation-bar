import { useState } from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import SideDrawer from "./SideDrawer";
import { FiMenu } from "react-icons/fi";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  return (
    <div className="navbar">
      <Logo />

      <Nav />
      <div className="toggle">
        <FiMenu onClick={handleToggle} />
      </div>

      <nav className={toggle ? "sidedrawer active" : "sidedrawer"}>
        <SideDrawer handleToggle={handleToggle} />
      </nav>
    </div>
  );
};

export default NavBar;
