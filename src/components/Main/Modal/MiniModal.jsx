import React, { useState } from "react";
import CheckboxLabels from './CheckBox'
import TransitionsModal from './BigModal'
import obj from "../../../Object"
import { CheckBox } from "@mui/icons-material";

function MiniModal({
    id, 
    data,
    setData
}){
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [bigModalOpen, setBigModalOpen] = useState()

    const label = { inputProps: { 'aria-label' : 'Checkbox demo' }};

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
        // console.log(bookmarks);
    }

    return(
        <div className="modalBox">
                <ul className="modalBox__list">
                    {data && data.map((item, i) => {
                        return (
                            <li key={i} className="modalBox__item">
                                <div className="modalBox__name">
                                    <CheckBox {...label} defaultChecked color="success" />
                                    <span>{item.name}</span>
                                </div>
                                <div className="modalBox__icon">
                                <i class='bx bxs-lock-alt'></i>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            <div>
                <button  className="modalBox__bitn"
                 onClick={handleOpen}
                >Create add list</button>
            </div>
            <div style={{display: bigModalOpen !== id ? 'none': 'block'}}>
                <TransitionsModal 
                    open = {open}
                    setOpen = {setOpen}
                    handleOpen = {handleOpen}
                    handleClose = {handleClose}
                    data = {data}
                    setData = {setData}
                />
            </div>
        </div>
    )
}

export default MiniModal