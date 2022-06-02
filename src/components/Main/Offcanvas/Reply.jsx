import React from "react";
import user from '../../../assets/Imgs/user.png'

function ReplyBox({
    userImg,
    userName,
    userData,
    comment,
    reaksiya,
    replies,
}){
    return(
        <>
            <li className="comments__item reply__Item">
                <div>
                    <div className="comments__itemBox">
                        <div className="comments__imgBox">
                            <img className="comments__img" src={user} alt="user" />
                            <div className="comments__text">
                                <p className="comments__name">{userName}</p>
                                <p className="comments__data">{userData}</p>
                            </div>
                        </div>
                        <button className="fixedBox__dots">
                            <i class='bx bx-dots-horizontal-rounded'></i>
                        </button>
                    </div>
                    <div>
                        <p>{comment}</p>
                    </div>
                    <div className="comments__replys replyBox">
                        <div className="replyBox__box">
                            <button className="fixedBox__likeBtn">
                                <i class='bx bx-like'></i>
                                <span>{reaksiya}</span>
                            </button>
                            <button className="fixedBox__commt" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                                <i class='bx bx-message-rounded-dots'></i>
                                <span>{replies}</span>
                            </button>
                        </div>
                        <button className="replyBox__btnn">
                            Reply
                        </button>
                    </div>
                </div>
            </li>
        </>
    )
}

export default ReplyBox