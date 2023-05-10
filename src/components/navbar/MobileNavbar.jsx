import { NavLink } from "react-router-dom";
import Dropdown from "../UI/Dropdown";
import Button from "../UI/Button";

const MobileMenu = () => {
    return (
      <div className={'mobile-menu login'}>
        <NavLink to="/" >Home</NavLink>
        <NavLink to="/recipes" >Recipes</NavLink>
        <Dropdown name="Events" />
        <Dropdown name="Blog" />
        <Dropdown name="Pages" />
        <NavLink to="/about" >About Us</NavLink>
        <NavLink to="/auth/register">
          <Button name="Register" />
        </NavLink>
        <NavLink to="/auth/login">
          <Button name="Login" />
        </NavLink>
      </div>
    );
  };

  export default MobileMenu