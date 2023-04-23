import { useState, useRef } from "react";
import ErrorIcon from "../../images/error.svg"
import MailIcon from "../../images/mail.svg"
import PasswordIcon from "../../images/password.svg"
import Background from "../../images/background.png"
import "./login.css"
import { NavLink } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("Email can't be blanka");
    const [errorPassword, setErrorPassword] = useState("Password can't be blanka");
    const [isActiveMail, setIsActiveMail] = useState(false);
    const [isActivePassword, setIsActivePassword] = useState(false);

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const submitForm = (e) => {
        (email == "") ? setIsActiveMail(!isActiveMail) : checkEmail();
        (password == "") ? setIsActivePassword(!isActivePassword) : checkPass();
        setTimeout(() => {
            emailRef.current.classList.remove("shake");
            passwordRef.current.classList.remove("shake");
        }, 500);
    }
    const emailChange = (e) => {
        setEmail(e.target.value);
    }
    const passwordChange = (e) => {
        setPassword(e.target.value);
    }
    const checkEmail = () => { 
        let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; 
        if(!email.match(pattern)){ 
            emailRef.current.classList.add('error', 'show-btn')
            emailRef.current.classList.remove('valid')
            email != "" ? setError("Enter a valid email address") : setError("Email can't be blanka");
        }else{ 
            emailRef.current.classList.remove("error")
            emailRef.current.classList.add("valid")
            setError("")
        }
      }
      const checkPass = () => { 
        if(password == ""){ 
            passwordRef.current.classList.add("error");
            passwordRef.current.classList.remove("valid");
            password != "" ? setErrorPassword("Enter a valid Password") : setErrorPassword("Password can't be blanka");
        }else{
            passwordRef.current.classList.remove("error");
            passwordRef.current.classList.add("valid");
            setErrorPassword("")
        }
      }
    return (
        <div className="login-auth">
            <div className="wrapper">
                <div className="left">
                    <header>Login</header>
                        <form action="#" onSubmit={submitForm}>
                            <div className={isActiveMail ? "shake error field email" : "field email"}>
                                <div className="input-area">
                                    <input type="text" ref={emailRef} onChange={emailChange} value={email} placeholder="Email Address" />
                                    <img src={MailIcon} className="icon" alt="mailIcon" />
                                    <img src={ErrorIcon} className="error error-icon" alt="errorIcon" />
                                </div>
                                <div className="error error-txt">{error}</div>
                            </div>
                            <div className={isActivePassword ? "shake error field password" : "field password"}>
                                <div className="input-area">
                                    <input type="password" ref={passwordRef}  onChange={passwordChange} value={password} placeholder="Password" />
                                    <img src={PasswordIcon} className="icon"  alt="passwordIcon" />                                <img src={ErrorIcon} className="error error-icon"  alt="errorIcon" />
                                </div>
                                <div className="error error-txt">{errorPassword}</div>
                            </div>
                            <div className="pass-txt">
                                <a href="#">Forgot password?</a>
                            </div>
                            <input type="submit" value="Login" />
                        </form>
                        <div className="sign-txt">
                            Not yet member? 
                            <NavLink to="/auth/register"> Signup now</NavLink>
                        </div>
                </div>
                <div className="right">
                    <h3 className="auth-right-text">გახადე ცხოვრება უფრო გემრიელი</h3>
                    <img src={Background} className="auth-bg" alt="background-image" />
                </div>
            </div>
        </div>
    )
}

export default Login