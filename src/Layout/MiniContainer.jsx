import React from "react";

function MiniContainer(props){
    return(
        <div className="miniContainer">
            {props.children}
        </div>
    )
}

export default MiniContainer;