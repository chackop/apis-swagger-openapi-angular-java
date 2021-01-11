'use strict';


/**
 *
 * body Order  (optional)
 * returns Order
 **/
exports.orderPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "quantity" : 1,
  "productId" : 1234,
  "id" : 1,
  "orderDate" : "2019-01-10T16:37:30-08:00",
  "customer" : {
    "firstName" : "John",
    "lastName" : "Smith",
    "phone" : "555-555-5555",
    "customerNumber" : "d290f1ee"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

