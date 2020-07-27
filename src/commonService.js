const productDetails = {
    "productid":"",
    "version":"",
    "applications":[],
    "productLines":[],
    "addons":[]
};
export function saveProductdetails(data,page) {
    productDetails[page] = data;
    console.log(productDetails);
}

export function getProductdetails(){
    return productDetails;
}

export function save(params) {
    params.productid = params.applications+params.productLines+Math.floor((Math.random()*10000000));
    productDetails['productid'] = params.productid;
    console.log(params);
    const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(params)
  };
  return fetch("http://localhost:4000/productdetails/saveProductDetails",requestOptions)   
}

export function getMetadata(){
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      };
      return fetch("http://localhost:4000/metadata/getmetadata",requestOptions)
}