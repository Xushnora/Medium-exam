import React from "react";
import { Link } from "react-router-dom";
import Container from "../../../Layout/Container";
import RightBox from "../RightBox";
import BasicTable from "./Note";
import Sitebar from "./Sitebar";

function Notifications(){
    return(
        <>
            <Container>
                <Link to="/notifications">
                    <div className="mainRow">
                        <div className="sitebar">
                            <Sitebar />
                        </div>
                        <div className="hero">
                            <div className="listBox">
                                <div className="listBox__rows">
                                    <h2 className="listBox__title nodeText">Notifications</h2>
                                </div>
                            </div>
                            <BasicTable />
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