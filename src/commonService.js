const productDetails = {
    "versions":[],
    "applications":[],
    "productlines":[],
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
    params.productid = params.applications+params.productLines+Math.random();
    console.log(params);
    const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({"productid":"4523620","versions":"120","applications":"BdC","productLines":"HOd","addons":"ndone"})
  };
  return fetch("http://localhost:4000/productdetails/saveProductDetails",requestOptions)   
}