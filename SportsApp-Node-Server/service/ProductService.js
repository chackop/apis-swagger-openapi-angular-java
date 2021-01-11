'use strict';


/**
 *
 * pageNumber Integer Page number to return (optional)
 * pageSize Integer Number of results in the page (optional)
 * returns List
 **/
exports.productGET = function(pageNumber,pageSize) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "image" : "https://hplussport.com/images/1234",
  "name" : "Lemon Water",
  "description" : "Lemon Water",
  "id" : 400,
  "image_title" : "mineral-water-lemon-lime"
}, {
  "image" : "https://hplussport.com/images/1234",
  "name" : "Lemon Water",
  "description" : "Lemon Water",
  "id" : 400,
  "image_title" : "mineral-water-lemon-lime"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Add a product to the catalog
 *
 * body Product  (optional)
 * no response value expected for this operation
 **/
exports.productPOST = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 *
 * productId Integer 
 * customerSecurityHeader Integer  (optional)
 * returns Product
 **/
exports.productProductIdGET = function(productId,customerSecurityHeader) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "image" : "https://hplussport.com/images/1234",
  "name" : "Lemon Water",
  "description" : "Lemon Water",
  "id" : 400,
  "image_title" : "mineral-water-lemon-lime"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

