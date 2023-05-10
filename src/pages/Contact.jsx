import React, { useState } from "react"
import EarthIcon from "../icons/earth.svg"
import EmailIcon from "../icons/email.svg"
import LocationIcon from "../icons/location.svg"
import PhoneIcon from "../icons/phone.svg"
import "../style/contact.css"

import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Grid from '@mui/material/Grid';

const Contact = () => {
    const [open, setOpen] = React.useState(false)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [nameError, setNameError] = useState("")
    const [emailError, setEmailError] = useState("")
    const error = nameError + emailError
  
    const handleClick = (e) => {
    //   setOpen(true)
        e.preventDefault();
        checkName()
        checkEmail()
        if(name > 3 || /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            setOpen(true)
        }else if (name <3 || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)){
            setOpen(false)
        }
    }
    const checkName = () => {
        if (name.length < 3) {
            setNameError("მინიმუმ 3 სიმბოლო");
        }else {
            setNameError("")
        }
    }
    const checkEmail = () => {
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            setEmailError("მიუთითეთ სწორი მეილი!")
        } else {
            setEmailError("")
        }
    }
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      setOpen(false)
    }
    const message = (
        <React.Fragment>
            <Grid container direction="row" alignItems="center">
                <span>შეტყობინება წარმატებით გაიგზავნა</span>
                <CheckCircleIcon sx={{ ml: 1 }} style={{ color: "green", }} />
            </Grid>
        </React.Fragment>
    )
    const action = (
        <React.Fragment>
          <Button color="primary" size="small" onClick={handleClose}>
            დახურვა
          </Button>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
          </IconButton>
        </React.Fragment>
    );
    return (
        <div className="contact">
             <div className="section-header">
                <h2>დაგვიკავშირდით</h2>
            </div>
            <div className="container">
                <div className="contact-info">
                    <div className="contact-info-block">
                        <div className="rounded">
                            <img src={LocationIcon} alt="locationIcon" />
                        </div>
                        <div className="rounded-info">
                            <h4>ტელეფონი</h4>
                            <span>+995 577 59 73 35</span>
                        </div>
                    </div>
                    <div className="contact-info-block">
                        <div className="rounded">
                            <img src={PhoneIcon} alt="phoneIcon" />
                        </div>
                        <div className="rounded-info">
                            <h4>მისამართი</h4>
                            <span>თსუ მე-11 კორპუსი(განივი), უნივერსიტეტის ქ.13</span>
                        </div>
                    </div>
                    <div className="contact-info-block">
                        <div className="rounded">
                            <img src={EmailIcon} alt="emailIcon" />
                        </div>
                        <div className="rounded-info">
                            <h4>მეილი</h4>
                            <span>info@mail.ru</span>
                        </div>
                    </div>
                    <div className="contact-info-block">
                        <div className="rounded">
                            <img src={EarthIcon} alt="earthIcon" />
                        </div>
                        <div className="rounded-info">
                            <h4>პროექტის კოდი</h4>
                            <span>github.com</span>
                        </div>
                    </div>
                </div>
                <div className="contact-us-form">
                    <div className="ganivi-location">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.1644474614877!2d44.719362515435954!3d41.71697017923518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40447371b40dc741%3A0xaa9f66639d890960!2z4YOX4YOh4YOjIOGDm-GDlC0xMSDhg5nhg53hg6Dhg57hg6Phg6Hhg5ggKOGDkuGDkOGDnOGDmOGDleGDmCk!5e0!3m2!1ska!2sge!4v1682189836836!5m2!1ska!2sge" width="600" height="500" loading="lazy" ></iframe>
                    </div>
                    <div className="send-msg">
                        <div className="text-header">
                            <h3>დაგვიტოვეთ შეტყობინება ქვემოთ</h3>
                        </div>
                        <div className="send-form">
                            <form>
                                <div className="form-group">
                                    <label>სახელი:</label>
                                    <input 
                                        placeholder="თქვენი სახელი" 
                                        type="text" 
                                        name="name" 
                                        id="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)} 
                                        required 
                                    />
                                    <span className="contact-error">{nameError}</span>
                                </div>
                                <div className="form-group">
                                    <label>მეილი:</label>
                                    <input 
                                        placeholder="თქვენი მეილი" 
                                        type="email" 
                                        name="email" 
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)} 
                                        required 
                                    />
                                    <span className="contact-error">{emailError}</span>
                                </div>
                                <div className="form-group">
                                    <label>შეტყობინება:</label>
                                    <textarea 
                                        name="message" 
                                        placeholder="ტექსტი" 
                                        id="message" 
                                        cols="30" 
                                        rows="10">
                                    </textarea>
                                </div>
                                <div className="form-group btn">
                                    <button onClick={handleClick} type="submit" >შეტყობინების გაგზავნა</button>
                                    <div id="snackbar">შეტყობინება წარმატებით გაიგზავნა</div>
                                </div>
                                <Snackbar
                                    open={open}
                                    autoHideDuration={6000}
                                    onClose={handleClose}
                                    message={message}
                                    action={action}
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact