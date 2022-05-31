import React from "react";
import { Link } from "react-router-dom";
import Container from "../../../Layout/Container";
import RightBox from "../RightBox";
import Sitebar from "./Sitebar";

function Notifications(){
    return(
        <>
            <Container>
                <Link to="/main">
                    <div className="mainRow">
                        <div className="sitebar">
                            <Sitebar />
                        </div>
                        <div className="hero">
                            <div className="HeroBox">
                                <h1>Notifications</h1>
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

export default Notifications