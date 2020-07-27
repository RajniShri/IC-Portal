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
