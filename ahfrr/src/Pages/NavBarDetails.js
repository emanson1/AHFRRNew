import React from 'react';
import {Grid} from '@mui/material ';
export default function NavBarDetails ({setSelectedTab}) {
  
    return(
    <div className='detailLinkContainer'>
        <span className='detailLink'><a onClick={() => setSelectedTab('blank')}>Instrument</a></span>
        <span className='detailLink'><a onClick={() => setSelectedTab('description')}>Description</a></span>
        <span className='detailLink'><a onClick={() => setSelectedTab('marketcapacity')}>Market Capacity</a></span>
        <span className='detailLink'><a  onClick={() => setSelectedTab('instituionalownership')}>Instituional Ownership</a></span>
        <span className='detailLink'><a  onClick={() => setSelectedTab('debttoequityratio')}>Debt To Equity Ratio</a></span>
        <span className='detailLink'><a  onClick={() => setSelectedTab('earningspershare')}>Earnings Per Share</a></span>
        <span className='detailLink'><a  onClick={() => setSelectedTab('netmargin')}>Net Margin</a></span>
        <span className='detailLink'><a  onClick={() => setSelectedTab('future')}>Future</a></span>
        <span className='detailLink'><a  onClick={() => setSelectedTab('socialresponsibility')}>Social Responsibility</a></span>
        </div>
    
    )
  }