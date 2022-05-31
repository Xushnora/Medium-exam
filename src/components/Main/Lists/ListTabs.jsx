import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Saved from './Saved';

import obj from '../../../Object'

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

export default function BasicTabs() {
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
                />
              }
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

