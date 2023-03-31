import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Mvp from './Mvp';
import Logout from '../Logout';
import Wwcd from './Wwcd';
import Topfragger from './Topfragger';
import { useEffect } from 'react';
import { useParams } from "react-router-dom";

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

export default function Display() {
  const mid = useParams();
  const m_id = mid.id;
  useEffect(() => {
    console.log(m_id,"me it is")
  }, [])
    const [value, setValue] = React.useState(localStorage.getItem('selectedTab') || 0);
    const [loaded, setLoaded] = React.useState(false);
    
    useEffect(() => {
        localStorage.setItem('selectedTab', value);
        setLoaded(true);
      }, [value]);
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <Box sx={{ width: '100%',zIndex:"1" }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider',zIndex:"1" }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="LIVE MATCH STAT" {...a11yProps(0)} />
            <Tab label="WWCD" {...a11yProps(1)} />
            <Tab label="MVP" {...a11yProps(2)} />
            <Tab label="TOP FRAGGER" {...a11yProps(3)} />
          </Tabs>
        </Box>
        <div
        style={{
          // position: 'relative', // add position: relative
          // height: loaded ? 'auto' : 0, // set height to auto only when loaded is true\
          // top:"100px",
          overflow: 'hidden', // add overflow: hidden
          transition: 'height 0.3s ease-in-out', // add transition property
        }}
      >
        <TabPanel value={value} index={0}>
         <Logout m_id={m_id} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Wwcd mid={mid} />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Mvp/>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Topfragger/>
        </TabPanel>
        </div>
      </Box>
    );
}
