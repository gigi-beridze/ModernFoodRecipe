import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom"
import MobileMenu from "./MobileNavbar";
import Logo from '/images/logo.svg'
import './navbar.css'
import Dropdown from "../UI/Dropdown";
import Button from "../UI/Button";

const Navbar = () => {
    const [isShown, setIsShown] = useState(false);
    const [active, setActive] = useState(false)
    const toggleMobileMenu = () => {
        setIsShown(!isShown)
    }
    const isActive = () => {
        window.scrollY > 0 ? setActive(true) : setActive(false)
    }
    useEffect(() => {
        window.addEventListener("scroll", isActive)
        return () => {
            window.removeEventListener("scroll", isActive)   
        }
    }, [])
    return (
        <>
        <div className="navbar-section">
            <div className={active ? "navbar activee" : "navbar"}>
                <div className='logo'>
                <NavLink to="/">
                    <img src={Logo} alt="logo" />
                    </NavLink>
                </div>
            <div className='menu'>
                <NavLink to="/" >Home</NavLink>
                <Dropdown name="Recipes" />
                <Dropdown name="Events" />
                <Dropdown name="Blog" />
                <Dropdown name="Pages" />
                <NavLink to="/about" >About Us</NavLink>
            </div>
            <div className="login">
                <NavLink to="/auth/register">
                    <Button name="Register" />
                </NavLink>
                <NavLink to="/auth/login">
                    <Button name="Login" />
                </NavLink>
            </div>   
            <button className='show-mobile-menu-button' onClick={toggleMobileMenu}>
                &#8801;
            </button>
            </div> 
            </div>
            {isShown && <MobileMenu />}
      </>
    )
}

export default Navbar