import { NavLink } from "react-router-dom";
import Dropdown from "../UI/Dropdown";
import Button from "../UI/Button";

const MobileMenu = () => {
    return (
      <div className={'mobile-menu login'}>
        <NavLink to="/" >Home</NavLink>
        <Dropdown name="Recipes" />
        <Dropdown name="Events" />
        <Dropdown name="Blog" />
        <Dropdown name="Pages" />
        <NavLink to="/" >About Us</NavLink>
        <div>
          <Button name="Register" />
        </div>
        <div>
          <Button name="Login" />
        </div>
      </div>
    );
  };

  export default MobileMenu