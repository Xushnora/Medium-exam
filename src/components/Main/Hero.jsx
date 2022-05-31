import React, { useState } from "react";
import CategoryBtn from "./Categorybtn";
import MiniModal from "./Modal/MiniModal";
import BasicTabs from "./PostBox/Tabs"


function Hero({newObj, cardArr, setCardArr, bookmarks, setBookmarks, newBookmark, setNewBookmark, saved, setSaved}){

    const [categoryBtn, setCategoryBtn] = useState(["All", "Business", "Programming", "Design", "Money"])
    const typeArr = ["", "Business", "Programming", "Design", "Money"];

    return(
        <div className="HeroBox">
            <div className="HeroBox__category">
                <p className="HeroBox__title">Your Topics</p>
                {categoryBtn.map((btn, i) => {
                    return <CategoryBtn 
                        btn = {btn} 
                        key= {i+"bts"}
                        id = {typeArr[i]}
                        obj = {newObj}
                        cardArr = {cardArr}
                        setCardArr = {setCardArr}
                    />
                })}
            </div>
            <div className="HeroBox__following">
                <BasicTabs 
                    cardArr = {cardArr}
                    bookmarks = {bookmarks}
                    setBookmarks = {setBookmarks}
                    saved = {saved}
                    setSaved = {setSaved}
                    newBookmark = {newBookmark}
                    setNewBookmark = {setNewBookmark}
                />
            </div>
        </div>
    )
}

export default Hero