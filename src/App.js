import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { faPaperPlane,faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class App extends React.Component {
  productList = ['Personal Auto','Homeowners','Commercial Auto','Business Owners','Commercial Umbrella'];
  selectedItems = [{
      "name": "Product list",
      "items": ["Personal Auto","Homeowners"]
    },{
      "name": "Plugins",
      "items": ["Rating","Forms"]
    },{
      "name": "Features",
      "items": ["Binding","Quoting"]
    }];
  constructor(props){
    super(props);
    this.state = {date:new Date()};
  }
  myMehtod =() => {
	  const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "username": "jason",
        "password": "my-super-secret-password"
      })
    };
    return fetch("http://localhost:4000/users/authenticate",requestOptions)   
  }
  componentDidMount() {
  this.myMehtod().then((resp)=>{resp.json().then((rep)=>{
	  this.setState({userDetails:rep});
	  })});
  }

  render() {
	  console.log(this.state);
	  
    return (
      <div className="container">
        <h1 class="title">InsurCloud XChange</h1>
        <div class="col-md-12 row">
        <div class="col-md-2 selected">
          Product details
          {this.selectedItems.map(value=>(
            <div>
            <li>{value.name}</li>
            {value.items.map(item=>(
              <span>{item}</span>
            ))}
            </div>
          ))}
          <div>ddddd</div>
        </div>
        
        <div class="col-md-9 content row">
          
        <div class="col-md-12 subtitle"><h4>Please select the product from below list?</h4></div>
          <div class="items">
          {this.productList.map(value => (
            <div class="col-md-6">
              <div class="icon"><FontAwesomeIcon icon={faPaperPlane} /></div>
              <div>{value}<FontAwesomeIcon icon={faQuestionCircle} /><input type="checkbox"></input></div>
              
            </div>
          ))}
          </div>
          </div>
        </div>
        <button type="button" class="btn btn-primary">Proceed</button>
      </div>
    )
  }


}



export default App;
