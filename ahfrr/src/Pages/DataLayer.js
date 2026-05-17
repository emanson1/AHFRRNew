import React from 'react';
import { makeStyles } from '@mui/material /styles';
import TradingViewWidget from 'react-tradingview-widget';

function  DataLayer(props) {
  const { instrument } = props;
      return (
        <React.Fragment>
        <TradingViewWidget 
        symbol={instrument.Symbol}
        autosize
        interval="D"
        hide_top_toolbar="true"
        hide_legend ="true"
        />
    </React.Fragment>
      );

}

export default DataLayer;
