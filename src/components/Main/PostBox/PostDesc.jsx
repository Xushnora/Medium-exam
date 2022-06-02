import React from "react";

import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import FixedBox from "../FixedBox/FixedBox";
import Offcanvas from "../Offcanvas/Offcanvas";


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

function PostDesc({
    id, 
    name, 
    avatar, 
    data, 
    textTitle, 
    desc, 
    img, 
    descInfo, 
    commentsArr,
    nameInput,
    lastName
}){
    return(
        <div className="posts">
           <div className="article__itemBox-text">
               <div className="posts__rowBox">
                    <div className="d-flex align-items-center posts__header">
                        <img className="posts__avatar" src={avatar} alt="avatar" />
                        <div>
                            <p className="posts__name">{name}</p>
                            <span className="article__data">{data} . 4 min read</span>
                        </div>
                    </div>
                    <div className="posts__btnGroup">
                        <BootstrapTooltip title="Twitter" placement="top">
                            <button>
                                <i class='bx bxl-twitter'></i>
                            </button>
                        </BootstrapTooltip>
                        <BootstrapTooltip title="Facebook" placement="top">
                            <button>
                                <i class='bx bxl-facebook-circle' ></i>
                            </button>
                        </BootstrapTooltip>
                        <BootstrapTooltip title="Linkedin" placement="top">
                            <button>
                                <i class='bx bxl-linkedin-square' ></i>
                            </button>
                        </BootstrapTooltip>
                        <BootstrapTooltip title="Share link" placement="top">
                            <button>
                                <i class='bx bx-link'></i>
                            </button>
                        </BootstrapTooltip>
                        <BootstrapTooltip title="Save" placement="top">
                            <button>
                                <i class='bx bxs-bookmark'></i>
                            </button>
                        </BootstrapTooltip>
                        <BootstrapTooltip title="More" placement="top">
                            <button>
                                <i class='bx bx-dots-horizontal-rounded'></i>
                            </button>
                        </BootstrapTooltip>
                    </div>
               </div>
                <h2 className="posts__textTitle">{textTitle}</h2>
                <p className="posts__descInfo">{descInfo}</p>
                <img className="posts__img" src={img} alt="work" />
                <p className="posts__descInfo">{desc}</p>
            </div> 
            <FixedBox />
            <Offcanvas 
                commentsArr = {commentsArr}
                nameInput = {nameInput}
                lastName = {lastName}
            />
        </div>
    )
}

export default PostDesc