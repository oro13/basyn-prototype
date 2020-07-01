import React, { Component } from 'react';
import './App.css';
import img_elRectangleCopy from './images/PayBill_elRectangleCopy.png';

export default class PayBill extends Component {

  // This component doesn't use any properties

  constructor(props) {
    super(props);
    
    this.state = {
    };
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentDidUpdate() {
  }

  render() {
    
    const style_elRectangleCopy = {
      backgroundImage: 'url('+img_elRectangleCopy+')',
      backgroundSize: '100% 100%',
     };
    const style_elPayMyBill = {
      fontSize: 15.2,
      color: 'white',
      textAlign: 'left',
     };
    
    return (
      <div className="PayBill">
        <div className="foreground">
          <div className="elRectangleCopy" style={style_elRectangleCopy} />
          <div className="font-robotoMedium  elPayMyBill" style={style_elPayMyBill}>
            <div>{this.props.locStrings.paybill_paymybill_719494}</div>
          </div>
        </div>
      </div>
    )
  }
  
}
