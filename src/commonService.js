let metadata = {
    "version":[],
    "applications":[],
    "productLines":[],
    "addons":[]
};

const productDetails = {
    "productid":"",
    "version":"",
    "applications":[],
    "productLines":[],
    "addons":[]
};
export function setProductdetails(data,page) {
    productDetails[page] = data;
}

export function getProductdetails(){
    return productDetails;
}

export function setMetadata(data) {
    metadata = data;
}

export function getMetadata(){
    return metadata;
}