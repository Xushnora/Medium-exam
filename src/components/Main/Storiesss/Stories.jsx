import React from "react";
import { Link } from "react-router-dom";
import Container from "../../../Layout/Container";
import RightBox from "../RightBox";
import Sitebar from "../SiteBar/Sitebar";
import TablesBtn from "./StoriesTab";
import BasicTable from "./StoriesTab";

function Stories({ inputText }){

    return(
        <>
            <Container>
                <Link to="/stories">
                    <div className="mainRow">
                        <div className="sitebar">
                            <Sitebar />
                        </div>
                        <div className="hero">
                            <div className="listBox">
                                <div className="listBox__rows">
                                    <h1 className="listBox__title">Your stories</h1>
                                    <div>
                                        <button className="listBox__btn">Write a story</button>
                                        <button className="stories__btn">Import a story</button>
                                    </div>
                                </div>
                                <div className="stories__tableBox">
                                    <BasicTable  inputText  = { inputText } />
                                </div>
                            </div>
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

export default Stories