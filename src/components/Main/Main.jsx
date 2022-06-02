import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from "../../Layout/Container";
import Hero from "./Hero";
import RightBox from "./RightBox";
import Sitebar from "../Main/SiteBar/Sitebar";
import obj from '../../Object.js'

function Main({
    saved, 
    setSaved,
    setEmptyStory,
    emptyStory,
    setStoryTextArr,
    storyTextArr,
    data,
    setData
}){

    const [newObj, setNewObj] = useState([...obj]);
    const[cardArr, setCardArr] = useState([])
    
        useEffect(() => {
            setCardArr(obj)
        }, [])


    return(
        <>
            <Container>
                <Link to="/main">
                    <div className="mainRow">
                        <div className="sitebar">
                            <Sitebar />
                        </div>
                        <div className="hero">
                            <Hero 
                                newObj = {newObj}
                                setCardArr = {setCardArr}
                                cardArr = {cardArr}
                                setSaved = {setSaved}
                                saved = {saved}
                                storyTextArr = {storyTextArr}
                                setStoryTextArr = {setStoryTextArr}
                                emptyStory = {emptyStory}
                                setEmptyStory = {setEmptyStory}
                                data = {data}
                                setData = {setData}
                            />
                        </div>
                        <div className="rightBox">
                            <RightBox obj = {newObj} />
                        </div>
                    </div>
                </Link>
            </Container>
        </>
    )
}

export default Main;