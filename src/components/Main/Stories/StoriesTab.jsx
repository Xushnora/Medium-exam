import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabList(props) {
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

TabList.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function btnProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTable({ inputText }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'dark' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Drafts 5" {...btnProps(0)} />
          <Tab label="Published" {...btnProps(1)} />
          <Tab label="Responses 2" {...btnProps(2)} />
        </Tabs>
      </Box>
      <TabList value={value} index={0}>
        <div>
          <h4 className="stories__title">Siz kutgan ma'lumot ikkinchi bo'limda!</h4>
        </div>
      </TabList>
      <TabList value={value} index={1}>
         <ul className='stories'>
            {inputText.map((item, i) => {
            if(item.text !== ''){
                return (
                <li key={i + 1} className="stories__item">
                    <h4 className="stories__title">{item.text}</h4>
                    <div className="stories__box d-flex align-items-center">
                    <span className="stories__pub">Published less than a minute ago</span>
                    <span className="stories__pub">. 1 min read</span>
                    <button className="stories__ikon"><i className='bx bx-upload'></i></button>
                    <button className="stories__ikon"><i className='bx bx-dots-horizontal-rounded' ></i></button>
                    </div>
                </li> 
              )
            }
            })}
          </ul>
      </TabList>
      <TabList value={value} index={2}>
          <ul className='stories'>
                <li className="stories__item">
                    <h4 className="stories__title">First List</h4>
                    <div className="stories__box d-flex align-items-center">
                    <span className="stories__pub">Published less than a minute ago</span>
                    <span className="stories__pub">. 1 min read</span>
                    <button className="stories__ikon"><i className='bx bx-upload'></i></button>
                    <button className="stories__ikon"><i className='bx bx-dots-horizontal-rounded' ></i></button>
                    </div>
                </li> 
                <li className="stories__item">
                    <h4 className="stories__title">Second list</h4>
                    <div className="stories__box d-flex align-items-center">
                    <span className="stories__pub">Published less than a minute ago</span>
                    <span className="stories__pub">. 1 min read</span>
                    <button className="stories__ikon"><i className='bx bx-upload'></i></button>
                    <button className="stories__ikon"><i className='bx bx-dots-horizontal-rounded' ></i></button>
                    </div>
                </li> 
          </ul>
      </TabList>
    </Box>
  );
}
