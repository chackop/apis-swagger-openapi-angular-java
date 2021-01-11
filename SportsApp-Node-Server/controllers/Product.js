'use strict';

var utils = require('../utils/writer.js');
var Product = require('../service/ProductService');

module.exports.productGET = function productGET (req, res, next, pageNumber, pageSize) {
  Product.productGET(pageNumber, pageSize)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.productPOST = function productPOST (req, res, next, body) {
  Product.productPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.productProductIdGET = function productProductIdGET (req, res, next, productId, customerSecurityHeader) {
  Product.productProductIdGET(productId, customerSecurityHeader)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
