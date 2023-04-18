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
        <div className="aaa">
            <div className={active ? "navbar activee" : "navbar"}>
                <div className='logo'>
                    <img src={Logo} alt="logo" />
                </div>
            <div className='menu'>
                <NavLink to="/" >Home</NavLink>
                <Dropdown name="Recipes" />
                <Dropdown name="Events" />
                <Dropdown name="Blog" />
                <Dropdown name="Pages" />
                <NavLink to="/" >About Us</NavLink>
            </div>
            <div className="login">
                <Button name="Register" />
                <Button name="Login" />
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