import React from 'react';
import './index.css';

export class HomeComponent extends React.Component {
    constructor(props){
        super(props);
    }

    next = (history) => {
      history.push("/application");
    };

    render() {
      const { match, location, history } = this.props;
        return (
         <div className="" id="header"> 
        <div className="col-md-12 subtitle" style= {{textAlign: "center"}}>
            <h3>Welcome to InsurCloud Exchange</h3>
            <a href="" onClick={()=>{this.next(history)}}><h4>Create My product</h4></a>
            </div>
            </div>
        );
    }
}