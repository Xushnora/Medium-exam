import React from "react";
import ReplyBox from "./Reply";

import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

const BootstrapTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.black,
    },
}));

function CommentBox({
    replyArr,
    id,
    userImg,
    userName,
    userData,
    comment,
    reaksiya,
    replies,
    dropOpen,
    setDropOpen,
    getReplyValue,
    sumbitReplyValue,
    replyRef,
    nameInput,
    lastName
}){

    return(
        <>
            <li className="comments__item">
                <div>
                    <div className="comments__itemBox">
                    <div className="comments__imgBox">
                        <img className="comments__img" src={userImg} alt="user" />
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
                        <BootstrapTooltip title="Like" placement="top">
                            <button className="fixedBox__likeBtn">
                                <i class='bx bx-like'></i>
                                <span>{reaksiya}</span>
                            </button>
                        </BootstrapTooltip>
                            <button className="fixedBox__commt" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                                <i class='bx bx-message-rounded-dots'></i>
                                <span>{replies}</span>
                            </button>
                        </div>
                        <button onClick={() => dropOpen !== id ? setDropOpen(id) : setDropOpen(" ")} className="replyBox__btnn">
                            Reply
                        </button>
                    </div>
                </div>
                <ul className="comments__replyList">
                    {replyArr && replyArr.map((matn, i) => {
                        return <ReplyBox 
                            id = {matn.id}
                            userName = {matn.userName}
                            userData = {matn.userData}
                            comment = {matn.comment}
                            reaksiya = {matn.reaksiya}
                            replies = {matn.replies}
                            dropOpen = {matn.dropOpen}
                            setDropOpen = {matn.setDropOpen}
                            getReplyValue = {matn.getReplyValue}
                            sumbitReplyValue = {matn.sumbitReplyValue}
                        />
                    })}
                </ul>
                {/* Reply modals */}
                <div  className="comments__replyModal" style={{display: dropOpen !== id ? 'none': 'block'}}>
                    <div className="userProfil__textareaBox">
                        <textarea ref={replyRef} onChange={getReplyValue} className="userProfil__textarea" cols="42" rows="4" placeholder="What are you thought?"></textarea>
                        <div className="userProfil__btnsBox">
                            <div className="userProfil__btnStyle">
                                <button className="userProfil__B">B</button>
                                <button className="userProfil__B" >i</button>
                            </div>
                            <div className="userProfil__btnsBox">
                                <button className="userProfil__cancel">Cancel</button>
                                <button onClick={sumbitReplyValue} className="userProfil__Respond">Respond</button>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </>
    )
}

export default CommentBox