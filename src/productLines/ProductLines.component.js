import React from 'react';
import { faPaperPlane,faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class ProductLinesComponent extends React.Component {
    productList = ['Personal Auto','Homeowners','Commercial Auto','Business Owners Property','Commercial Umbrella'];
    productIconList = ['personalAuto.png','homeOwners.png','commercialAuto.png','commercialProperty.png','workersComp.png'];
  
    constructor(props){
        super(props);
    }

    componentDidMount(){}

    render() {
        return (
        <div className="col-md-12 subtitle">
            <h6>Please select the product from below list?</h6>
            <div className="items">
              {this.productList.map((value,i) => (
                <div className="col-md-6" key={i}>
                  <div className="icon">
                  <img src={require('./productLinesIcons/' + this.productIconList[i])} style={{width: "25px",height: "25px"}}/>
                  </div>
                  <div className="icon">{value}</div>
                  <img src={require('./productLinesIcons/tooltip.png')} style={{width: "15px",height: "15px"}}/>
                </div>
              ))}
            </div>
        </div>
        );
    }
}