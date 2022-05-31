import React, { useState } from "react";
import CheckboxLabels from './CheckBox'
import TransitionsModal from './BigModal'
import Checkbox from '@mui/material/Checkbox';
import obj from "../../../Object"

function MiniModal({id, bookmarks, setBookmarks, newBookmark, setNewBookmark}){
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
        console.log(obj);
    }

    return(
        <div className="modalBox">
                <ul className="modalBox__list">
                    <li className="modalBox__item">
                        <div onClick={() => handleSaved(id)} className="modalBox__name">
                            <Checkbox {...label} />
                            <span>Reading list</span>
                        </div>
                        <div className="modalBox__icon">
                            <i class='bx bxs-lock-alt'></i>
                        </div>
                    </li>
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
                    newBookmark = {newBookmark}
                    setNewBookmark = {setNewBookmark}
                    bookmarks = {bookmarks}
                    setBookmarks = {setBookmarks}
                />
            </div>
        </div>
    )
}

export default MiniModal