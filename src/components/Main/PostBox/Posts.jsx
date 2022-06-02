import React, { useState } from "react";
import { Link } from "react-router-dom";
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import obj from '../../../Object'

import MiniModal from "../Modal/MiniModal";


const BootstrapTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.black,
    },
  }));

function Posts({
    name, 
    textTitle, 
    avatar, 
    img, 
    desc, 
    date, 
    category, 
    id, 
    saved, 
    setSaved, 
    data,
    setData
}){
    const [modalopen, setModalOpen] = useState();

    const handleSaved = (idx) => {
        obj.map((el) => {
            if(idx===el.id) {
                if(el.isActive === true) {
                    el.isActive = false
                }
                if(el.isActive === false) {
                    el.isActive = true
                }
            }
        })
        // console.log(obj);
    }

    return(
        <>
            <li className="article__item">
                    <Link to={`/posts/${id}`}>
                        <div className="article__itemBox">
                            <div className="article__itemBox-text">
                                <div className="article__usersBox">
                                    <img className="article__img" src={avatar} alt="avatar" />
                                    <p className="article__name">{name}</p>
                                    <span className="article__data">{date}</span>
                                </div>
                                <h2 className="article__textTitle">{textTitle}</h2>
                                <p className="article__desc">{desc}</p>
                            </div>
                            <div className="article__itemBox-img">
                                <img src={img} alt="works" />
                            </div>
                        </div>
                    </Link>
                        <div className="article__addBox">
                            <div className="article__readBox">
                                <button>{category}</button>
                                <span>7 min read</span>
                                <span>Based on reading story</span>
                            </div>
                            <div className="article__addBtnBox">
                                <BootstrapTooltip title="Saved" placement="top">
                                    <button  onClick={()=> modalopen !== id ? setModalOpen(id): setModalOpen('')}
                                        className="article__addBtn"
                                        >
                                        <i onClick={() => handleSaved(id)} class='bx bx-bookmark-plus'></i>
                                    </button>  
                                </BootstrapTooltip>
                               <div>
                                    <div style={{display: modalopen !== id ? 'none': 'block'}}>
                                        <MiniModal 
                                            id = {id} 
                                            saved = {saved}
                                            setSaved = {setSaved}
                                            data = {data}
                                            setData = {setData}
                                        />
                                    </div>
                                    <div>
                                        <button className="article__dotBtn">
                                            <i class='bx bx-dots-horizontal-rounded'></i>
                                        </button>
                                    </div>
                               </div>
                               
                            </div>
                        </div>
            </li>
        </>
    )
}

export default Posts