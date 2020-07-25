import React from 'react';
import '../index.css';
import {iconsBaseUrl} from "../config";

export class ProductLinesComponent extends React.Component {

    constructor(props){
        super(props);
        this.state ={
          productList:[]
        }
    }

    componentDidMount(){
      this.setState({productList:JSON.parse(sessionStorage.getItem('metadata'))[0].productLines});
    }

    render() {
        return (
        <div className="col-md-12 subtitle">
            <h6>Please select the product from below list?</h6>
            <div className="items">
              {this.state.productList.map((value,i) => (
                <div className="col-md-6" key={i}>
                  <button class="button button1">
                  <div className="icon">
                  <img class="buttonIcon"src={iconsBaseUrl+value.icon} />
                  </div>{value.name}</button>
                  <img class="tooltipIcon" src={iconsBaseUrl+'tooltip.png'}/>
                </div>
              ))}
            </div>
        </div>
        );
    }
}