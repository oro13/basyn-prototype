import React, { Component } from 'react';
import './App.css';
import img_elCard from './images/CardInvoice2_elCard.png';
import img_elGroup from './images/CardInvoice2_elGroup.png';
import img_elRectangle from './images/CardInvoice2_elRectangle.png';

export default class CardInvoice2 extends Component {

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
    
    const style_elCard = {
      backgroundImage: 'url('+img_elCard+')',
      backgroundSize: '100% 100%',
     };
    
    const style_elGroup = {
      backgroundImage: 'url('+img_elGroup+')',
      backgroundSize: '100% 100%',
     };
    const style_elAllInvoices = {
      fontSize: 15.2,
      color: '#787878',
      textAlign: 'left',
     };
    
    const style_elHoverCopy = {
      background: 'rgba(194, 194, 194, 0.161)',
     };
    const style_elDate = {
      fontSize: 11.8,
      color: 'rgba(105, 105, 105, 0.4747)',
      textAlign: 'left',
     };
    const style_elTime = {
      fontSize: 11.8,
      color: 'rgba(105, 105, 105, 0.4747)',
      textAlign: 'left',
     };
    const style_elMeasurement = {
      fontSize: 11.8,
      color: 'rgba(105, 105, 105, 0.4747)',
      textAlign: 'center',
     };
    const style_elOrderHash = {
      fontSize: 11.8,
      color: 'rgba(105, 105, 105, 0.4747)',
      textAlign: 'left',
     };
    const style_elAccountName = {
      fontSize: 11.8,
      color: 'rgba(105, 105, 105, 0.4747)',
      textAlign: 'left',
     };
    const style_elAmount = {
      fontSize: 11.8,
      color: 'rgba(105, 105, 105, 0.4747)',
      textAlign: 'left',
     };
    const style_elType = {
      fontSize: 11.8,
      color: 'rgba(105, 105, 105, 0.4747)',
      textAlign: 'left',
     };
    const style_elStatus = {
      fontSize: 11.8,
      color: 'rgba(105, 105, 105, 0.4747)',
      textAlign: 'left',
     };
    const style_elHaulService = {
      fontSize: 11.8,
      color: 'rgba(105, 105, 105, 0.4747)',
      textAlign: 'left',
     };
    const style_elUNPAID = {
      fontSize: 11.8,
      color: '#808080',
      textAlign: 'left',
     };
    
    const style_elLine = {
      borderTop: '1px solid rgba(150, 150, 150, 0.0809)',
     };
    
    const style_elLineCopy = {
      borderTop: '1px solid rgba(150, 150, 150, 0.0809)',
     };
    const style_elSummaryOfChargesa = {
      fontSize: 15.2,
      color: '#787878',
      textAlign: 'center',
     };
    const style_elN250000 = {
      fontSize: 11.8,
      color: 'black',
      textAlign: 'center',
     };
    const style_elTOTALAMOUNTDUEON = {
      fontSize: 11.8,
      color: 'black',
      textAlign: 'center',
     };
    const style_elN948AM = {
      fontSize: 11.8,
      color: '#afafaf',
      textAlign: 'left',
     };
    const style_elN1000Liters = {
      fontSize: 11.8,
      color: '#afafaf',
      textAlign: 'left',
     };
    const style_elMay4 = {
      fontSize: 11.8,
      color: '#ff7977',
      textAlign: 'left',
     };
    const style_elSO0002SX = {
      fontSize: 11.8,
      color: '#696969',
      textAlign: 'left',
     };
    const style_elCarolWarner = {
      fontSize: 11.8,
      color: '#696969',
      textAlign: 'left',
     };
    const style_elN2500 = {
      fontSize: 11.8,
      color: '#696969',
      textAlign: 'left',
     };
    const style_elYES = {
      fontSize: 11.8,
      color: '#696969',
      textAlign: 'left',
     };
    const style_elBioFertilizer = {
      fontSize: 11.8,
      color: '#696969',
      textAlign: 'left',
     };
    
    const style_elRectangle = {
      backgroundImage: 'url('+img_elRectangle+')',
      backgroundSize: '100% 100%',
     };
    const style_elV1 = {
      fontSize: 11.0,
      color: 'white',
      textAlign: 'left',
     };
    
    return (
      <div className="CardInvoice2">
        <div className="foreground">
          <div className="elCard" style={style_elCard} />
          <div className="elGroup" style={style_elGroup} />
          <div className="font-robotoMedium  elAllInvoices" style={style_elAllInvoices}>
            <div>{this.props.locStrings.cardinvoice2_allinvoices_382824}</div>
          </div>
          <div className="elHoverCopy" style={style_elHoverCopy} />
          <div className="font-robotoMedium  elDate" style={style_elDate}>
            <div>{this.props.locStrings.cardinvoice2_date_1047932}</div>
          </div>
          <div className="font-robotoMedium  elTime" style={style_elTime}>
            <div>{this.props.locStrings.cardinvoice2_time_577280}</div>
          </div>
          <div className="font-robotoMedium  elMeasurement" style={style_elMeasurement}>
            <div>{this.props.locStrings.cardinvoice2_measurement_543858}</div>
          </div>
          <div className="font-robotoMedium  elOrderHash" style={style_elOrderHash}>
            <div>{this.props.locStrings.cardinvoice2_orderhash_593413}</div>
          </div>
          <div className="font-robotoMedium  elAccountName" style={style_elAccountName}>
            <div>{this.props.locStrings.cardinvoice2_accountname_928676}</div>
          </div>
          <div className="font-robotoMedium  elAmount" style={style_elAmount}>
            <div>{this.props.locStrings.cardinvoice2_amount_903842}</div>
          </div>
          <div className="font-robotoMedium  elType" style={style_elType}>
            <div>{this.props.locStrings.cardinvoice2_type_507006}</div>
          </div>
          <div className="font-robotoMedium  elStatus" style={style_elStatus}>
            <div>{this.props.locStrings.cardinvoice2_status_528971}</div>
          </div>
          <div className="font-robotoMedium  elHaulService" style={style_elHaulService}>
            <div>{this.props.locStrings.cardinvoice2_haulservice_911822}</div>
          </div>
          <div className="font-robotoRegular  elUNPAID" style={style_elUNPAID}>
            <div>{this.props.locStrings.cardinvoice2_unpaid_451842}</div>
          </div>
          <div className="elLine" style={style_elLine} />
          <div className="elLineCopy" style={style_elLineCopy} />
          <div className="font-robotoMedium  elSummaryOfChargesa" style={style_elSummaryOfChargesa}>
            <div>{this.props.locStrings.cardinvoice2_summaryofchargesa_539734}</div>
          </div>
          <div className="font-robotoBold  elN250000" style={style_elN250000}>
            <div>{this.props.locStrings.cardinvoice2_n250000_607784}</div>
          </div>
          <div className="font-robotoBold  elTOTALAMOUNTDUEON" style={style_elTOTALAMOUNTDUEON}>
            <div>{this.props.locStrings.cardinvoice2_totalamountdueon_632500}</div>
          </div>
          <div className="font-robotoRegular  elN948AM" style={style_elN948AM}>
            <div>{this.props.locStrings.cardinvoice2_n948am_73709}</div>
          </div>
          <div className="font-robotoRegular  elN1000Liters" style={style_elN1000Liters}>
            <div>{this.props.locStrings.cardinvoice2_n1000liters_216715}</div>
          </div>
          <div className="font-robotoRegular  elMay4" style={style_elMay4}>
            <div>{this.props.locStrings.cardinvoice2_may4_917492}</div>
          </div>
          <div className="font-robotoRegular  elSO0002SX" style={style_elSO0002SX}>
            <div>{this.props.locStrings.cardinvoice2_so0002sx_569189}</div>
          </div>
          <div className="font-robotoRegular  elCarolWarner" style={style_elCarolWarner}>
            <div>{this.props.locStrings.cardinvoice2_carolwarner_702593}</div>
          </div>
          <div className="font-robotoRegular  elN2500" style={style_elN2500}>
            <div>{this.props.locStrings.cardinvoice2_n2500_160854}</div>
          </div>
          <div className="font-robotoRegular  elYES" style={style_elYES}>
            <div>{this.props.locStrings.cardinvoice2_yes_156820}</div>
          </div>
          <div className="font-robotoRegular  elBioFertilizer" style={style_elBioFertilizer}>
            <div>{this.props.locStrings.cardinvoice2_biofertilizer_910356}</div>
          </div>
          <div className="elRectangle" style={style_elRectangle} />
          <div className="font-robotoMedium  elV1" style={style_elV1}>
            <div>{this.props.locStrings.cardinvoice2_n1_590845}</div>
          </div>
        </div>
      </div>
    )
  }
  
}
