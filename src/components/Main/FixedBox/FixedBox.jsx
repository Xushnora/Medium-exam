import React from "react";

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


function FixedBox(){
    return(
        <>
            <div className="fixedBox">
                <BootstrapTooltip title="Like" placement="top">
                    <button className="fixedBox__likeBtn">
                        <i class='bx bx-like'></i>
                        <span>14.4K</span>
                    </button>
                </BootstrapTooltip>
                <button className="fixedBox__commt" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                    <i class='bx bx-message-rounded-dots'></i>
                    <span>93</span>
                </button>
                <button className="fixedBox__dots">
                    <i class='bx bx-dots-horizontal-rounded'></i>
                </button>
            </div>
        </>
    )
}

export default FixedBox