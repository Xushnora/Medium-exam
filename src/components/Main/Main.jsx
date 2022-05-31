import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from "../../Layout/Container";
import Hero from "./Hero";
import RightBox from "./RightBox";
import Sitebar from "../Main/SiteBar/Sitebar";
import obj from '../../Object.js'

function Main({bookmarks, setBookmarks, newBookMark, setNewBookmark, saved, setSaved}){

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
                                bookmarks = {bookmarks}
                                setBookmarks = {setBookmarks}
                                newBookMark = {newBookMark}
                                setNewBookmark = {setNewBookmark}
                                setSaved = {setSaved}
                                saved = {saved}
                            />
                        </div>
                        <div className="rightBox">
                            <RightBox />
                        </div>
                    </div>
                </Link>
            </Container>
        </>
    )
}

export default Main;