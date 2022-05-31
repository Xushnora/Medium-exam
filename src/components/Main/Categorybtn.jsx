import React from "react";
import { Link } from "react-router-dom";
function CategoryBtn({btn, id, setCardArr, obj, cardArr}){

    const handlerClick = (e) => {
        let btnValue = e.target.textContent;

        if(btnValue === 'All') {
            setCardArr(obj);
        } else {
            const filteredArr = obj.filter((item) => {
                return item.category === e.target.id
            })
            setCardArr(filteredArr);
        }
        console.log(e.target.id);
    }


    return(
        <Link to="/main">
            <button onClick={handlerClick} id = {id} className="categoryBtn">{btn}</button>
        </Link>
    )
}

export default CategoryBtn