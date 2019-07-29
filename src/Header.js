import React from "react";
import logo from "./Pacifica-640x640-black.png"
import "./Header.css";

function Header() {
    return (
        <div className="pacificaheader">
            <div className="LogoHeader">
                <div><img src={logo} className="Logo" alt="Pacifica Software"/></div>
                <div><p className="Title">Pacifica Software</p></div>
            </div>
        </div>
    );
};

export default Header;