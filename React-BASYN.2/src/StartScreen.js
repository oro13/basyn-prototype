import React, { Component } from 'react';
import './App.css';
import img_elMask from './images/StartScreen_elMask.png';
import img_elScreenShot20200422At113624PM from './images/ModalScreen_elScreenShot20200422At113624PM_754726.jpg';
import img_elFill from './images/StartScreen_elFill.png';
import img_elBg from './images/StartScreen_elBg.png';
import img_elShape from './images/StartScreen_elShape.png';
import img_elTriangle1Copy from './images/StartScreen_elTriangle1Copy.png';
import CardInvoice from './CardInvoice';
import PayBill from './PayBill';

// UI framework component imports
import Container from 'muicss/lib/react/container';

import QueryTest from './eventQueryTest';

export default class StartScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

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

  onClick_elPayBill = (ev) => {
    // Go to screen 'Modal'
    this.props.appActions.goToScreen('modal', { transitionId: 'fadeIn' });

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
    const style_elPayBill = {
      cursor: 'pointer',
      pointerEvents: 'auto',
     };

    return (
      <Container fluid={true} className="AppScreen StartScreen" style={baseStyle}>
        <div className="background">
          <div className="containerMinHeight elBackground" style={style_elBackground_outer}>
            <div style={style_elBackground} />
          </div>

          <div className="elBackdrop" style={style_elBackdrop} />
          <div className="elBase" style={style_elBase} />
          <div className="font-robotoRegular  elCarolBiggs" style={style_elCarolBiggs}>
            <div>{this.props.locStrings.start_carolbiggs_68709}</div>
          </div>
          <div className="elMask" style={style_elMask} />
          <div className="elScreenShot20200422At113624PM" style={style_elScreenShot20200422At113624PM} />
          <div className="elBar" style={style_elBar} />
          <div className="elBar2" style={style_elBar2} />
          <div className="elFrame" style={style_elFrame} />
          <div className="elFill" style={style_elFill} />
          <div className="elBg" style={style_elBg} />
          <div className="font-robotoRegular  elV1" style={style_elV1}>
            <div>{this.props.locStrings.start_n1_444659}</div>
          </div>
          <div className="elShape" style={style_elShape} />
          <div className="font-montserratMedium  elBASYN" style={style_elBASYN}>
            <div>{this.props.locStrings.start_basyn_943878}</div>
          </div>
          <QueryTest />
          <div className="elTriangle1Copy" style={style_elTriangle1Copy} />
          <div className="elRectangle" style={style_elRectangle} />
        </div>

        <div className="screenFgContainer">
          <div className="foreground">
            <div className="hasNestedComps elCardInvoice">
              <CardInvoice ref={(el)=> this._elCardInvoice = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
            <div className="hasNestedComps elPayBill" style={style_elPayBill} onClick={this.onClick_elPayBill} >
              <PayBill ref={(el)=> this._elPayBill = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
          </div>
        </div>
      </Container>
    )
  }

}
