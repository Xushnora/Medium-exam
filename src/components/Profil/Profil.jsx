import React from "react";

// img
import imgUser from "../../assets/Imgs/user.png"
import Container from "../../Layout/Container";
import MiniContainer from "../../Layout/MiniContainer";

function Profil(props){

    console.log(props.name);
    console.log(props.lastName);
    
    return(
        <>
            <MiniContainer>
                <div className="users">
                    <div className="users__row">
                        <div className="users__rowIn">
                            <div className="users__imgbox">
                            <div className="users__relative">
                                <img className="users__img" src={imgUser} alt="user" />
                                <div className="users__iconStar">
                                    <i className='bx bxs-star'></i>
                                </div>
                            </div>
                            </div>
                            <div className="users__descBox">
                            <h2 className="users__info "><span>Name: </span><span className="users__name">{props.name} {props.lastName}</span></h2>
                            <p className="users__info"><span>Nomeri: </span>{props.number}</p>
                            <p className="users__info"><span>Emaili: </span>{props.email}</p>
                            <p className="users__info"><span>Bio: </span>Frontend Developer</p>
                            </div>
                        </div>
                        <div className="users__bgImgbox">
                        </div>
                    </div>
                </div>
            </MiniContainer>
        </>
    )
}

export default Profil;