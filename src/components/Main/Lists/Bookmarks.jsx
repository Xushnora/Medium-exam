
import React from "react";
import { Link } from "react-router-dom";

import user from "../../../assets/Imgs/user.png"
import RightBox from "../RightBox";
import Sitebar from "../SiteBar/Sitebar";
import ReadingList from "./ReadingList";

function BookmarkPage({
    obj,
    name, 
    lastName
}){
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
                                        <p>{name} {lastName}</p>
                                        <p>May 31 . 12 stories</p>
                                    </div>
                                </div>
                                <div className="Newpost__publishBox">
                                    <button className="Newpost__buttonr">
                                        <i class='bx bx-dots-horizontal-rounded'></i>
                                    </button>
                                </div>
                            </header>
                            <div className="bookmarks__infoBox">
                                <h2 className="bookmarks__title">Reading list</h2>
                                
                            </div>
                            <ul className="bookmarks__list ulList">
                            {obj && obj.map((item) => {
                                if(item.isActive) {
                                    return <ReadingList 
                                        name = {item.name}
                                        avatar = {item.avatar}
                                        img = {item.img}
                                        id = {item.id}
                                        textTitle = {item.textTitle}
                                        data = {item.data}
                                        desc = {item.desc}
                                        descInfo = {item.descInfo}
                                        category = {item.category}
                                    />
                                }
                            })}
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



