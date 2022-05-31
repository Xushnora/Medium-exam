import React from "react";
import Container from "../../../Layout/Container";
import RightBox from "../../Main/RightBox";
import Sitebar from "../../Main/SiteBar/Sitebar";
import TabPanel from "./ListTabs"

function Lists({saved}){
    console.log(saved);
    return(
        <>
            <Container>
                <div className="mainRow">
                    <div className="sitebar">
                        <Sitebar />
                    </div>
                    <div className="hero">
                        <div className="listBox">
                            <div className="listBox__rows">
                                <h1 className="listBox__title">Your Lists</h1>
                                <button className="listBox__btn">New list</button>
                            </div>
                            <div>
                                <TabPanel />
                            </div>
                        </div>
                    </div>
                    <div className="rightBox">
                        <RightBox />
                    </div>
                </div>
            </Container>
        </> 
    )
}

export default Lists;