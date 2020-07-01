import React, { Component } from 'react';
import './App.css';

export default class _AtomsTextLabelDefault extends Component {

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
    const style_elLabel = {
      fontSize: 13.5,
      color: 'black',
      textAlign: 'left',
     };
    
    return (
      <div className="_AtomsTextLabelDefault">
        <div className="foreground">
          <div className="font-robotoRegular  elLabel" style={style_elLabel}>
            <div>{this.props.locStrings._atomstextlabeldefault_label_732915}</div>
          </div>
        </div>
      </div>
    )
  }
  
}
