import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Posts from './Posts';

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

export default function BasicTabs({cardArr, bookmarks, setBookmarks, setNewBookmark, newBookmark, saved, setSaved}) {
  const [value, setValue] = React.useState(0);

  const useEffect = () => {
    setBookmarks(...bookmarks )
  }
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Following" {...a11yProps(0)} />
          <Tab label="Recommended" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <h2>Bu yerda sizning Followerlaringiz bo'lishi mumkin edi</h2>
      </TabPanel>
      <TabPanel value={value} index={1}>
            <div className="HeroBox__article article">
                <ul className="article__list">
                    {cardArr.map((post, i) => {
                        return <Posts 
                            name = {post.name}
                            avatar = {post.avatar}
                            data = {post.data}
                            textTitle = {post.textTitle}
                            img = {post.img}
                            desc = {post.desc}
                            key = {post.id}
                            category = {post.category}
                            id = {post.id}
                            saved = {saved}
                            setSaved = {setSaved}
                            setNewBookmark = {setNewBookmark}
                            newBookmark = {newBookmark}
                            bookmarks = {bookmarks}
                            setBookmarks = {setBookmarks}
                        />
                    })}
                </ul>
            </div>
      </TabPanel>
    </Box>
  );
}
