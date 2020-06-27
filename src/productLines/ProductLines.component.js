import React from 'react';
import { faPaperPlane,faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class ProductLinesComponent extends React.Component {
    productList = ['Personal Auto','Homeowners','Commercial Auto','Business Owners','Commercial Umbrella'];
  
    constructor(props){
        super(props);
    }

    componentDidMount(){}

    render() {
        return (
        <div class="col-md-12 subtitle">
            <h4>Please select the product from below list?</h4>
            <div class="items">
              {this.productList.map(value => (
                <div class="col-md-6">
                  <div class="icon"><FontAwesomeIcon icon={faPaperPlane} /></div>
                  <div>{value}<FontAwesomeIcon icon={faQuestionCircle} /><input type="checkbox"></input></div>
                </div>
              ))}
            </div>
        </div>
        );
    }
}