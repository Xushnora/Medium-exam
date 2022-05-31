import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';

import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid #ccc',
  boxShadow: 24,
  p: 4,
  px: 4,
  pb: 3,
};


export default function TransitionsModal({open, handleClose, bookmarks, setBookmarks, newBookmark, setNewBookmark}) {

  let count = 1;
  const saveInputHandler = (e) => {
    setBookmarks({
      name: e.target.value,
      id: count,
    })
    count++;

    console.log(e.target.value);
  }

  const saveCreate = (e) => {
    setNewBookmark([...newBookmark, bookmarks])
  }

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={{...style, width: 800, height: 600}}>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              <div className='bigModal'>
                <h1 className='bigModal__title'>Create new list</h1>
                <div>
                  <form className='bigModal__form'>
                    <input onChange={saveInputHandler} className='bigModal__inputText' type="text" min = {0} max= {60} placeholder="Give it a name" required/>
                    <p className='bigModal__count'>0/60</p>
                  </form>
                  <button className='bigModal__inputDesc'>Add description</button>
                  {/* <div className='bigModal__inputDescBox'>
                    <input className='bigModal__inputText' type="text" max= {280} min = {0} placeholder="Description" required/>
                    <p className='bigModal__count'>0/280</p>
                  </div> */}
                  <div className='bigModal__chekkedBox'>
                    <Checkbox Checked />
                    <label>Make it private</label>
                  </div>
                </div>
                <div className='bigModal__btnss'>
                  <button className='bigModal__cancel'>Cancel</button>
                  <button className='bigModal__cansel' onClick={saveCreate}>Create</button>
                </div>
              </div>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
