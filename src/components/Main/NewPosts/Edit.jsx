import React from "react";
import { Link } from "react-router-dom";

import logo from "../../../assets/Imgs/logo.png"
import user from "../../../assets/Imgs/user.png"

let count = 125;

function Edit({
    inputText, 
    setInputText, 
    createInput, 
    setCreateInput,
    name, 
    lastName
}
){

    const textAreaHandle = (e) =>{
        setCreateInput(e.target.value)
    }

    const publishHandler = () =>{
        setInputText([
          ...inputText, {
            text: createInput,
            id: count
          }
        ])
        setCreateInput('')
        count++
    }
    
    return(
        <div className="Newpost minicontainer">
            <header className="Newpost__header">
                <div className="Newpost__usLogobox">
                    <img src={logo} alt="Logo" />
                    <span>Draft: </span>
                    <p>{name} {lastName}</p>
                </div>
                <div className="Newpost__publishBox">
                    <Link to="/stories">
                    <button onClick={publishHandler} className="Newpost__publishBtn">Publish</button>
                    </Link>
                    <button className="Newpost__buttonr">
                        <i className='bx bx-dots-horizontal-rounded'></i>
                    </button>
                    <button className="Newpost__buttonr">
                        <i className='bx bx-bell'></i>
                    </button>
                    <img className="Newpost__profilUser" src={user} alt="user" />
                </div>
            </header>
            <div className="Newpost__inputBox">
                <div>
                    <button className="Newpost__plussBtn">
                        <span>+</span>
                    </button>
                </div>
               <div>
                    <h1 className="Newpost__title">Title</h1>
                    <textarea onChange={textAreaHandle} value={createInput} className="Newpost__input" cols="500" rows="10" placeholder="Tell your story"></textarea>
               </div>
            </div>
        </div>
    )
}

export default Edit