import React, { Component } from 'react';
import './App.css';
import img_elMask from './images/ModalScreen_elMask.png';
import img_elScreenShot20200422At113624PM from './images/ModalScreen_elScreenShot20200422At113624PM_754726.jpg';
import img_elFill from './images/ModalScreen_elFill.png';
import img_elBg from './images/ModalScreen_elBg.png';
import img_elShape from './images/ModalScreen_elShape.png';
import img_elTriangle1Copy from './images/ModalScreen_elTriangle1Copy.png';
import CardInvoice2 from './CardInvoice2';
import PayBill2 from './PayBill2';
import Card from './Card';
import img_elField from './images/ModalScreen_elField.png';
import _AtomsTextLabelDefault from './_AtomsTextLabelDefault';
import img_elMask2 from './images/ModalScreen_elMask2.png';
import img_elRectangleCopy from './images/ModalScreen_elRectangleCopy.png';
import img_elRectangleCopy2 from './images/ModalScreen_elRectangleCopy2.png';

// UI framework component imports
import Container from 'muicss/lib/react/container';

export default class ModalScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  constructor(props) {
    super(props);
    
    this.state = {
      field: '',
    };
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentDidUpdate() {
  }

  onClick_elMask2 = (ev) => {
    // Go to screen 'Start'
    this.props.appActions.goToScreen('start', { transitionId: 'fadeIn' });
  
  }
  
  
  onClick_elRectangleCopy = (ev) => {
    // Go to screen 'Start'
    this.props.appActions.goToScreen('start', { transitionId: 'fadeIn' });
  
  }
  
  
  textInputChanged_field = (event) => {
    this.setState({field: event.target.value});
  }
  
  render() {
    let layoutFlowStyle = {};
    let baseStyle = {};
    if (this.props.transitionId && this.props.transitionId.length > 0 && this.props.atTopOfScreenStack && this.props.transitionForward) {
      baseStyle.animation = '0.25s ease-in-out '+this.props.transitionId;
    }
    if ( !this.props.atTopOfScreenStack) {
      layoutFlowStyle.height = '100vh';
      layoutFlowStyle.overflow = 'hidden';
    }
    
    const style_elBackground = {
      width: '100%',
      height: '100%',
     };
    const style_elBackground_outer = {
      backgroundColor: 'white',
     };
    
    const style_elBackdrop = {
      background: 'rgba(43, 47, 51, 0.050)',
     };
    
    const style_elBase = {
      background: 'rgba(255, 255, 255, 1.000)',
     };
    const style_elCarolBiggs = {
      fontSize: 10.1,
      color: '#a3a3a3',
      textAlign: 'left',
     };
    
    const style_elMask = {
      backgroundImage: 'url('+img_elMask+')',
      backgroundSize: '100% 100%',
     };
    const style_elScreenShot20200422At113624PM = {
      backgroundImage: 'url('+img_elScreenShot20200422At113624PM+')',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 50%',
      backgroundSize: 'cover',
     };
    
    const style_elBar = {
      background: 'rgba(43, 47, 51, 0.100)',
     };
    
    const style_elBar2 = {
      background: 'rgba(43, 47, 51, 0.100)',
     };
    
    const style_elFrame = {
      background: 'transparent',
     };
    
    const style_elFill = {
      backgroundImage: 'url('+img_elFill+')',
      backgroundSize: '100% 100%',
     };
    
    const style_elBg = {
      backgroundImage: 'url('+img_elBg+')',
      backgroundSize: '100% 100%',
     };
    const style_elV1 = {
      fontSize: 11.0,
      color: 'white',
      textAlign: 'center',
     };
    
    const style_elShape = {
      backgroundImage: 'url('+img_elShape+')',
      backgroundSize: '100% 100%',
     };
    const style_elBASYN = {
      fontSize: 29.1,
      color: '#7ed320',
      textAlign: 'left',
     };
    
    const style_elTriangle1Copy = {
      backgroundImage: 'url('+img_elTriangle1Copy+')',
      backgroundSize: '100% 100%',
     };
    
    const style_elRectangle = {
      background: 'transparent',
     };
    
    const style_elRectangle2 = {
      background: 'rgba(16, 16, 16, 0.859)',
     };
    
    const style_elField = {
      backgroundImage: 'url('+img_elField+')',
      backgroundSize: '100% 100%',
     };
    
    const style_elMask2 = {
      backgroundImage: 'url('+img_elMask2+')',
      backgroundSize: '100% 100%',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    
    const style_elRectangleCopy = {
      backgroundImage: 'url('+img_elRectangleCopy+')',
      backgroundSize: '100% 100%',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    const style_elCancel = {
      fontSize: 15.2,
      color: '#434343',
      textAlign: 'left',
     };
    
    const style_elRectangleCopy2 = {
      backgroundImage: 'url('+img_elRectangleCopy2+')',
      backgroundSize: '100% 100%',
     };
    const style_elPayThisAmount = {
      fontSize: 15.2,
      color: 'white',
      textAlign: 'left',
     };
    
    const style_elField2 = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      pointerEvents: 'auto',
     };
    
    return (
      <Container fluid={true} className="AppScreen ModalScreen" style={baseStyle}>
        <div className="background">
          <div className="containerMinHeight elBackground" style={style_elBackground_outer}>
            <div style={style_elBackground} />
          </div>
          
          <div className="elBackdrop" style={style_elBackdrop} />
          <div className="elBase" style={style_elBase} />
          <div className="font-robotoRegular  elCarolBiggs" style={style_elCarolBiggs}>
            <div>{this.props.locStrings.modal_carolbiggs_881229}</div>
          </div>
          <div className="elMask" style={style_elMask} />
          <div className="elScreenShot20200422At113624PM" style={style_elScreenShot20200422At113624PM} />
          <div className="elBar" style={style_elBar} />
          <div className="elBar2" style={style_elBar2} />
          <div className="elFrame" style={style_elFrame} />
          <div className="elFill" style={style_elFill} />
          <div className="elBg" style={style_elBg} />
          <div className="font-robotoRegular  elV1" style={style_elV1}>
            <div>{this.props.locStrings.modal_n1_376775}</div>
          </div>
          <div className="elShape" style={style_elShape} />
          <div className="font-montserratMedium  elBASYN" style={style_elBASYN}>
            <div>{this.props.locStrings.modal_basyn_600360}</div>
          </div>
          <div className="elTriangle1Copy" style={style_elTriangle1Copy} />
          <div className="elRectangle" style={style_elRectangle} />
        </div>
        
        <div className="screenFgContainer">
          <div className="foreground">
            <div className="hasNestedComps elCardInvoice2">
              <CardInvoice2 ref={(el)=> this._elCardInvoice2 = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
            <div className="hasNestedComps elPayBill">
              <PayBill2 ref={(el)=> this._elPayBill = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
            <div className="elRectangle2" style={style_elRectangle2} />
            <div className="hasNestedComps elCard">
              <Card ref={(el)=> this._elCard = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
            <div className="elField" style={style_elField} />
            <div className="hasNestedComps elLabel">
              <_AtomsTextLabelDefault ref={(el)=> this._elLabel = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
            <div className="elMask2" style={style_elMask2} onClick={this.onClick_elMask2}  />
            <div className="elRectangleCopy" style={style_elRectangleCopy} onClick={this.onClick_elRectangleCopy}  />
            <div className="font-robotoMedium  elCancel" style={style_elCancel}>
              <div>{this.props.locStrings.modal_cancel_369312}</div>
            </div>
            <div className="elRectangleCopy2" style={style_elRectangleCopy2} />
            <div className="font-robotoMedium  elPayThisAmount" style={style_elPayThisAmount}>
              <div>{this.props.locStrings.modal_paythisamount_406096}</div>
            </div>
            <input className="baseFont elField2" style={style_elField2} type="number" placeholder={this.props.locStrings.modal_field_132350} onChange={this.textInputChanged_field} value={this.state.field}  />
          </div>
        </div>
      </Container>
    )
  }
  
}
