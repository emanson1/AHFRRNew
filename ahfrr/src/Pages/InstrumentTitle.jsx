import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/material /styles';
import AppBar from '@mui/material /AppBar';
import Tabs from '@mui/material /Tabs';
import Tab from '@mui/material /Tab';
import DescriptionIcon from '@material-ui/icons/Description';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Typography from '@mui/material /Typography';
import Box from '@mui/material /Box';
import * as Constants from '../Shared/Constants';



export default function nAuto(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(-1);
  const [data, setData] = React.useState({});
  //const {finTechURL} = Constants;
   const finTechApiKey="c18kb1f48v6oak5hbkl0";
   const finTechURL="https://finnhub.io/api/v1/stock/metric?symbol={symbol}&metric=all&token=" + finTechApiKey;
let metric={};
let series={};
  React.useEffect(() => {
    fetch( finTechURL.toString().replace('{symbol}',props.instrument.Symbol))
      .then(results => results.json())
      .then(data => {
        setData(data);
           });
  }, []); // <-- Have to pass in [] here!

  const handleClick =() => {
    setValue(-1);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
    event.stopPropagation();
  };

  return (
  <div>
    <div className={classes.root}  onClick={(e)=>handleClick(e)}>
      {/* {JSON.stringify(props.instrument.Description)} */}
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="white"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
          tabItemContainerStyle={{width: '400px'}}
          style={{background: 'blue'}}
          contentContainerStyle={{background: '#FFF'}}
        >

          {/* <Tab  icon={<DescriptionIcon />} aria-label="Description" {...a11yProps(0)} /> */}
          <Tab  icon={<ShowChartIcon />} aria-label="MarketCapacity" {...a11yProps(1)} />
          <Tab  icon={<PersonPinIcon />} aria-label="InstitionalOwnership" {...a11yProps(2)} />
          <Tab  icon={<HelpIcon />} aria-label="DebtToEquityRatio" {...a11yProps(3)} />
          <Tab  icon={<ShoppingBasket />} aria-label="EarningsPerShare" {...a11yProps(4)} />
          <Tab  icon={<ThumbDown />} aria-label="NetMargin" {...a11yProps(5)} />
          <Tab  icon={<ThumbUp />} aria-label="Future" {...a11yProps(6)} />
          <Tab  icon={<ThumbUp />} aria-label="SocialResponsibility" {...a11yProps(7)} />
        </Tabs>
      </AppBar>
    
       
      <TabPanel value={value} index={0}>
      <div className="descriptionPanel">{props.instrument.Description}</div>
        <div className="tabPanel" ><strong>Metrics</strong><hr/>
        {JSON.stringify(data.metric)}</div>         
      </TabPanel>
      <TabPanel value={value} index={1}>
      <div className="descriptionPanel">{props.instrument.Description}</div>
        <div className="tabPanel" ><strong>Market Capacity</strong><hr/>
        {props.instrument.MarketCapacity}</div>         
      </TabPanel>
      <TabPanel className="tabPanel"  value={value} index={2}>
      <div className="descriptionPanel">{props.instrument.Description}</div>
       <div className="tabPanel" ><strong>Institutional Ownership</strong><hr/>
        {props.instrument.InstitionalOwnership}</div>      
      </TabPanel>
      <TabPanel className="tabPanel" value={value} index={3}>
      <div className="descriptionPanel">{props.instrument.Description}</div>
      <strong> Debt To Equity Ratio<hr/>
        {props.instrument.DebtToEquityRatio}</strong> 
      </TabPanel>
      <TabPanel className="tabPanel" value={value} index={4}>
      <div className="descriptionPanel">{props.instrument.Description}</div>
      <strong>Earnings Per Share<hr/>
        {props.instrument.EarningsPerShare}</strong> 
      </TabPanel>
      <TabPanel className="tabPanel" value={value} index={5}>
      <div className="descriptionPanel">{props.instrument.Description}</div>
      <strong>Net Margin<hr/>
        {props.instrument.NetMargin}</strong> 
      </TabPanel>
      <TabPanel className="tabPanel" value={value} index={6}>
      <div className="descriptionPanel">{props.instrument.Description}</div>
      <strong>Future<hr/>
        {props.instrument.Future}</strong> 
      </TabPanel>
      <TabPanel className="tabPanel" value={value} index={7}>
      <strong>Social Responsibility <hr/>
        {props.instrument.SocialResponsibility}</strong> 
      </TabPanel>
    </div></div>
    
  );
}
