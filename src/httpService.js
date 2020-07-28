export function save(params) {
    const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(params)
  };
  return fetch("http://localhost:4000/productdetails/saveProductDetails",requestOptions)   
}

export function getAppdata(){
  const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    };
    return fetch("http://localhost:4000/metadata/getmetadata",requestOptions)
}
