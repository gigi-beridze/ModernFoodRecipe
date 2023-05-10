import React from "react";
import { NavLink } from "react-router-dom"
import "./popup.css"

const Popup = props => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        {props.content}
        <NavLink to="/auth/login">
          <button className="popup-join-btn">შესვლა</button>
        </NavLink>
        <button onClick={props.handleClose} className="popup-exit-btn">დახურვა</button>
      </div>
    </div>
  );
};

export default Popup;
