import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Saved from './Saved';

import obj from '../../../Object'
import { Link } from 'react-router-dom';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({data, setData}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Saved" {...a11yProps(0)} />
          <Tab label="Highlights" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div>
          <div className='save'>
              <div className='save__main'>
                    <div className='save__main-box'>
                        <h2 className='save__main-title'>Create a list to easily <br/> organize and share stories</h2>
                        <button className='save__btn list-btn'>Start a list</button>
                    </div>
                    <div >
                        <button className='save__circle-btn'>
                            <i className='bx bx-bookmark-alt-plus'></i>
                        </button>
                    </div>
                    <button className='save__remove-btn'>
                        <i className='bx bx-x'></i>
                    </button>
                </div>
          </div>
          <ul className='ulList'>
            {obj.map((item) => {
              if(item.isActive) {
                return  <Saved
                  obj = {obj}
                  id = {item.id}
                  name = {item.name}
                  textTitle = {item.textTitle}
                  data = {item.data}
                  img = {item.img}
                  desc = {item.desc}
                  descInfo = {item.descInfo}
                  category = {item.category}
                />
              }
            })}
            {data.map((nim, i) => {
              return (
                <li className="cardBox">
                  <Link to= "/bookmarks">
                      <div className="cardBox__inRow">
                          <div className="cardBox__left">
                              <h2 className="cardBox__title">{nim.name}</h2>
                              <div className="cardBox__btnGr">
                                  <button className="cardBox__btn">View list</button>
                                  <span className="cardBox__str">3 wiews</span>
                                  <span className="cardBox__icon">
                                      <i class='bx bxs-lock-alt'></i>
                                  </span>
                              </div>
                          </div> 
                          <div className="cardBox__right">
                              <img className="cardBox__img first" src="https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg" alt="work" />
                              <img className="cardBox__img second" src="https://imgur.com/1hmdZBB.jpg" alt="work" />
                              <img className="cardBox__img third" src="https://i.pinimg.com/736x/50/df/34/50df34b9e93f30269853b96b09c37e3b.jpg" alt="work" />
                          </div> 
                      </div>
                  </Link>    
                </li>
              )
            })}
          </ul>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div>
          <h1>Bu yerga o'zimiz yaratgan post saqlanadi</h1>
        </div>
      </TabPanel>
    </Box>
  );
}

