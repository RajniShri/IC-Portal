import React from 'react';
import './Addons.component.css';

export class AddonsComponent extends React.Component {
    addonsList = ['Loss History','Pro-Metrix','Address Validation','Driver License Validation'];
    addonsIconList = ['lossHistory.png','proMetrix.png','addressValidation.png','driverLicense.png'];
    constructor(props){
        super(props);
    }

    componentDidMount(){}

    render() {
        return (
        <div className="col-md-12 subtitle">
            <h6>Please select the addons</h6>
            <div className="items">
              {this.addonsList.map((value,i) => (
                <div className="col-md-6"  key={i}>
                  <button class="button button1">
                  <div className="icon">
                  <img src={require('./addonsIcons/' + this.addonsIconList[i])} style={{width: "25px",height: "25px"}}/>
                  </div>{value}</button>
                  <img src={require('./addonsIcons/tooltip.png')} style={{width: "15px",height: "15px", marginTop: "25px",marginLeft:"5px"}}/>
                  
                </div>
              ))}
            </div>
        </div>
        );
    }
}