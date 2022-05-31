import React from "react";
import { Link, NavLink } from "react-router-dom";

// img
import logo from "../../../assets/Imgs/logo.png"
import user from "../../../assets/Imgs/user.png"

import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';


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

function Sitebar(){
    return(
            <div className="sitebarBox">
                <div className="sitebarBox__logo-box">
                    <img className="sitebarBox__logo" src={logo} alt="logo" />
                </div>
                <div className="sitebarBox__btns">
                    <NavLink to="/main" className="sitebarBox__navs">
                        <BootstrapTooltip title="Home" placement="right">
                            <button className="sitebarBox__btn">
                                <i className='bx bx-home'></i>
                            </button>
                        </BootstrapTooltip>
                    </NavLink>
                    <NavLink to="/notifications" className="sitebarBox__navs">
                        <BootstrapTooltip title="Notifications" placement="right">
                            <button className="sitebarBox__btn">
                                <i className='bx bx-bell'></i>
                            </button>
                        </BootstrapTooltip>
                    </NavLink>
                    <NavLink to="/lists" className="sitebarBox__navs">
                        <BootstrapTooltip title="Lists" placement="right">
                            <button className="sitebarBox__btn">
                                <i className='bx bx-bookmarks'></i>
                            </button>
                        </BootstrapTooltip>
                    </NavLink>
                    <NavLink to="/stories" className="sitebarBox__navs">
                        <BootstrapTooltip title="Stories" placement="right">
                            <button className="sitebarBox__btn">
                                <i className='bx bx-notepad'></i>
                            </button>
                        </BootstrapTooltip>
                    </NavLink>
                </div>
                <div className="sitebarBox__editBox">
                    <NavLink to="/edit" className="sitebarBox__navs">
                        <BootstrapTooltip title="Write" placement="right">
                            <button className="sitebarBox__editBtn">
                                <i className='bx bx-edit'></i>
                            </button>
                        </BootstrapTooltip>
                    </NavLink>
                </div>
                <div className="sitebarBox__profilBox">
                    <Link to="/profil">
                        <div className="sitebarBox__profil">
                            <img src={user} alt="user" />
                        </div>
                    </Link>
                </div>
            </div>  
    )
}

export default Sitebar