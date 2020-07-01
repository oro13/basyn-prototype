import React, { Component } from 'react';
import './App.css';
import img_elCard from './images/Card_elCard.png';

export default class Card extends Component {

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
    const style_elPayBillAmount250 = {
      fontSize: 23.6,
      color: '#2c3339',
      textAlign: 'left',
     };
    const style_elHintText = {
      fontSize: 13.5,
      color: '#999999',
      textAlign: 'left',
     };
    const style_elLabel = {
      fontSize: 13.5,
      color: 'black',
      textAlign: 'left',
     };
    const style_elHintText2 = {
      fontSize: 13.5,
      color: '#999999',
      textAlign: 'left',
     };
    const style_elLabel2 = {
      fontSize: 13.5,
      color: 'black',
      textAlign: 'left',
     };
    const style_elHintText3 = {
      fontSize: 13.5,
      color: '#999999',
      textAlign: 'left',
     };
    const style_elLabel3 = {
      fontSize: 13.5,
      color: 'black',
      textAlign: 'left',
     };
    const style_elOrderHashSO00 = {
      fontSize: 11.8,
      color: '#757575',
      textAlign: 'left',
     };
    
    return (
      <div className="Card">
        <div className="foreground">
          <div className="elCard" style={style_elCard} />
          <div className="font-futuraBold  elPayBillAmount250" style={style_elPayBillAmount250}>
            <div>{this.props.locStrings.card_paybillamount250_782455}</div>
          </div>
          <div className="font-robotoRegular  elHintText" style={style_elHintText}>
            <div>{this.props.locStrings.card_hinttext_812774}</div>
          </div>
          <div className="font-robotoRegular  elLabel" style={style_elLabel}>
            <div>{this.props.locStrings.card_label_550243}</div>
          </div>
          <div className="font-robotoRegular  elHintText2" style={style_elHintText2}>
            <div>{this.props.locStrings.card_hinttext2_297045}</div>
          </div>
          <div className="font-robotoRegular  elLabel2" style={style_elLabel2}>
            <div>{this.props.locStrings.card_label2_364458}</div>
          </div>
          <div className="font-robotoRegular  elHintText3" style={style_elHintText3}>
            <div>{this.props.locStrings.card_hinttext3_987050}</div>
          </div>
          <div className="font-robotoRegular  elLabel3" style={style_elLabel3}>
            <div>{this.props.locStrings.card_label3_82339}</div>
          </div>
          <div className="font-robotoRegular  elOrderHashSO00" style={style_elOrderHashSO00}>
            <div>{this.props.locStrings.card_orderhashso00_526751}</div>
          </div>
        </div>
      </div>
    )
  }
  
}
