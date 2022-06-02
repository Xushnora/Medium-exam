import React, { useRef, useState } from "react";

import user from '../../../assets/Imgs/user.png'
import CommentBox from "./Comment";

function Offcanvas({
    commentsArr,
    nameInput,
    lastName
}){

    // modal uchun
    const[dropOpen, setDropOpen] = useState(false)

    // comment uchun
    const [commentArr, setCommentArr] = useState([...commentsArr])
    const [commentObj, setCommentObj] = useState({
        userId: 2002,
        userImg: "https://imgur.com/SLOdhA7.png",
        userName: "Xushnora Nishonova",
        userData: "in less than a minute",
        reaksiya: null,
        replies: null,
    })

    // reply uchun
    const [replyArr, setReplyArr] = useState([])
    const [replyObj, setReplyObj] = useState({
        userId: 2002,
        userImg: "https://imgur.com/SLOdhA7.png",
        userName: "Xushnora Nishonova",
        userData: "in less than a minute",
        reaksiya: null,
        replies: null,
    })

    // comment uchun
    const getValue = (e) => {
        setCommentObj({
            userId: 2002,
            userImg: "https://imgur.com/SLOdhA7.png",
            userName: "Xushnora Nishonova",
            userData: "now",
            reaksiya: null,
            replies: null,
            comment: e.target.value
        })
    }

    // reply uchun
    const getReplyValue = (e) => {
        setReplyObj({
            userId: 2002,
            userImg: "https://imgur.com/SLOdhA7.png",
            userName: "Xushnora Nishonova",
            userData: "now",
            reaksiya: null,
            replies: null,
            comment: e.target.value
        })
    }

    // comment uchun
    const sumbitValue = () => {
        setCommentArr([...commentArr, commentObj])
        areaRef.current.value = null;
    }

    // reply uchun
    const sumbitReplyValue = () => {
        setReplyArr([...replyArr, replyObj])
        replyRef.current.value = null;
        setDropOpen(false)
    }

    const areaRef = useRef();
    const replyRef = useRef();


    return(
        <div>
            <div class="offcanvasBox offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasRightLabel">Responses( )</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <div className="userProfil">
                        <div className="userProfil__prof">
                            <img className="userProfil__img" src={user} alt="user" />
                            <p className="userProfil__name">{nameInput} {lastName}</p>
                        </div>
                        <div className="userProfil__textareaBox">
                            <textarea ref={areaRef} onChange={getValue} className="userProfil__textarea" cols="42" rows="4" placeholder="What are you thought?"></textarea>
                            <div className="userProfil__btnsBox">
                                <div className="userProfil__btnStyle">
                                    <button className="userProfil__B">B</button>
                                    <button className="userProfil__B" >i</button>
                                </div>
                                <div className="userProfil__btnsBox">
                                    <button className="userProfil__cancel">Cancel</button>
                                    <button onClick={sumbitValue} className="userProfil__Respond">Respond</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="comments">
                        <ul className="comments__list">
                            {commentArr.map((item, i) => {
                                return <CommentBox
                                key={i}
                                replyArr = {replyArr}
                                id = {item.id}
                                userImg = {item.userImg}
                                userName = {item.userName}
                                userData = {item.userData}
                                comment = {item.comment}
                                reaksiya = {item.reaksiya}
                                replies = {item.replies}
                                dropOpen = {dropOpen}
                                setDropOpen = {setDropOpen}
                                getReplyValue = {getReplyValue}
                                sumbitReplyValue = {sumbitReplyValue}
                                replyRef = {replyRef}
                                nameInput = {nameInput}
                                lastName = {lastName}
                                />
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Offcanvas;

