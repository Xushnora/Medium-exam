import React from "react";
import { Link } from "react-router-dom";
import obj from '../../Object'

function RightBox(){
    return(
       <div className="rightBox">
            <div className="rightBox__in">   
                <button className="rightBox__btn">Get unlimeted access</button>
               <div className="rightBox__searchBox">
                    <div className="rightBox__input">
                        <i className='bx bx-search'></i>
                        <input type="text" placeholder="Search"/>
                    </div>
                   <div className="writers">
                    <h2 className="writers__title">Top writers</h2>
                        <ul className="writers__list">
                            {obj && obj.map((item, i) => {
                                return (
                                    <li key={i} className="writers__item">
                                         {/* <Link to={`/posts/${id}`}></Link> */}
                                        <img className="writers__avatar" src={item.avatar} alt="avatar" />
                                        <div className="writers__descBox">
                                            <h3 className="writers__name">{item.name}</h3>
                                            <p className="writers__desc">{item.textTitle}</p>
                                        </div>
                                        <button className="writers__btn">Follow</button>
                                    </li>
                                )
                            })}
                        </ul>
                   </div>
               </div>
            </div>
       </div>
    )
}

export default RightBox;