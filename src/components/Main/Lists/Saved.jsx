import React from "react";
import { Link, useLocation } from "react-router-dom";


function Saved({ name, img, data }){
    
    return(
       <>
            <li className="cardBox">
                <Link to= "/bookmarks">
                    <div className="cardBox__inRow">
                        <div className="cardBox__left">
                            <h2 className="cardBox__title">{name}</h2>
                            <div className="cardBox__btnGr">
                                <button className="cardBox__btn">View list</button>
                                <span className="cardBox__str">{data}</span>
                                <span className="cardBox__icon">
                                    <i class='bx bxs-lock-alt'></i>
                                </span>
                            </div>
                        </div> 
                        <div className="cardBox__right">
                            <img className="cardBox__img first" src="https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg" alt="work" />
                            <img className="cardBox__img second" src="https://imgur.com/1hmdZBB.jpg" alt="work" />
                            <img className="cardBox__img third" src={img} alt="work" />
                        </div> 
                    </div>
                </Link>    
            </li>
       </>
    )
}

export default Saved