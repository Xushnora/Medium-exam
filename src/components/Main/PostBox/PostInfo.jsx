import React from "react";
import { Link, useLocation } from "react-router-dom";
import Container from "../../../Layout/Container";
import RightBox from "../RightBox";
import Sitebar from "../SiteBar/Sitebar";

import PostDesc from "./PostDesc";

function PostInfo({
    objData,
    name,
    lastName
}){
    let location = useLocation();

    return (
        <>
            <Container>
                    <div className="mainRow">
                        <div className="sitebar">
                            <Sitebar />
                        </div>
                        <div className="hero">
                        {objData.map((item, i) => {
                            if(item.id === +location.pathname.split('/').at(-1)) {
                                return <PostDesc
                                    commentsArr = {item.commentsArr}
                                    id = {item.id}
                                    name = {item.name}
                                    avatar = {item.avatar}
                                    data = {item.data}
                                    desc = {item.desc}
                                    textTitle = {item.textTitle}
                                    img = {item.img}
                                    descInfo = {item.descInfo}
                                    nameInput = {name}
                                    lastName = {lastName}
                
                                />      
                            }
                        })}
                        </div>
                        <div className="rightBox">
                            <RightBox />
                        </div>
                    </div>
            </Container>
        </> 
    )
}

export default PostInfo

// {newObj.map((item, i) => {
    // if(item.id === +location.pathname.split('/').at(-1)) {