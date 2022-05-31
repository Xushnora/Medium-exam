import React from "react";

import logo from "../../../assets/Imgs/logo.png"
import user from "../../../assets/Imgs/user.png"

function Edit(){
    return(
        <div className="Newpost minicontainer">
            <header className="Newpost__header">
                <div className="Newpost__usLogobox">
                    <img src={logo} alt="Logo" />
                    <span>Draft: </span>
                    <p>Xushnoranishonova</p>
                </div>
                <div className="Newpost__publishBox">
                    <button className="Newpost__publishBtn">Publish</button>
                    <button className="Newpost__buttonr">
                        <i class='bx bx-dots-horizontal-rounded'></i>
                    </button>
                    <button className="Newpost__buttonr">
                        <i class='bx bx-bell'></i>
                    </button>
                    <img className="Newpost__profilUser" src={user} alt="user" />
                </div>
            </header>
            <div className="Newpost__inputBox">
                <h1 className="Newpost__title">Title</h1>
                <button className="Newpost__plussBtn">
                    <span>+</span>
                </button>
                <input className="Newpost__input" type="text" placeholder="Tell your story"/>
            </div>
        </div>
    )
}

export default Edit