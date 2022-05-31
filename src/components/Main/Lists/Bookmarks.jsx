import { Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

import user from "../../../assets/Imgs/user.png"
import RightBox from "../RightBox";
import Sitebar from "../SiteBar/Sitebar";

function BookmarkPage({obj}){
    return(
        <>
                <Link to="/bookmarks">
                    <div className="mainRow">
                        <div className="sitebar">
                            <Sitebar />
                        </div>
                        <div className="hero">
                        <div className="Newpost">
                            <header className="Newpost__header">
                                <div className="Newpost__usLogobox bookmarks">
                                    <img className="bookmarks__userImg" src={user} alt="Logo" />
                                    <div className="bookmarks__infos">
                                        <p>Xushnoranishonova</p>
                                        <p>May 31 . 12 stories</p>
                                    </div>
                                </div>
                                <div className="Newpost__publishBox">
                                    <button className="Newpost__buttonr">
                                        <i class='bx bx-dots-horizontal-rounded'></i>
                                    </button>
                                </div>
                            </header>
                            <div>
                                <h2>Reading list</h2>
                                <input type="text" />
                                <button>Cancel</button>
                                <button>Done</button>
                            </div>
                            <ul>
                            {/* <li className="article__item">
                            <Link to={`/posts/${id}`}>
                                <div className="article__itemBox">
                                    <div className="article__itemBox-text">
                                        <img className="article__img" src={avatar} alt="avatar" />
                                        <p className="article__name">{name}</p>
                                        <span className="article__data">{data}</span>
                                        <h2 className="article__textTitle">{textTitle}</h2>
                                        <p className="article__desc">{desc}</p>
                                    </div>
                                    <div className="article__itemBox-img">
                                        <img src={img} alt="works" />
                                    </div>
                                </div>
                            </Link>
                                <div className="article__addBox">
                                    <div className="article__readBox">
                                        <button>{category}</button>
                                        <span>7 min read</span>
                                        <span>Based on reading story</span>
                                    </div>
                                    <div className="article__addBtnBox">
                                        <BootstrapTooltip title="Saved" placement="top">
                                            <button  onClick={()=> modalopen !== id ? setModalOpen(id): setModalOpen('')}
                                                className="article__addBtn"
                                                >
                                                <i class='bx bx-bookmark-plus'></i>
                                            </button>  
                                        </BootstrapTooltip>
                                    <div>
                                            <div style={{display: modalopen !== id ? 'none': 'block'}}>
                                                <MiniModal 
                                                    id = {id} 
                                                    saved = {saved}
                                                    setSaved = {setSaved}
                                                />
                                            </div>
                                            <div>
                                                <button className="article__dotBtn">
                                                    <i class='bx bx-dots-horizontal-rounded'></i>
                                                </button>
                                            </div>
                                    </div>
                                    
                                    </div>
                                </div>
                                </li> */}
                            </ul>
                        </div>
                        </div>
                        <div className="rightBox">
                            <RightBox />
                        </div>
                    </div>
                </Link>
           
        </>
    )
}

export default BookmarkPage



