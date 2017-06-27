const express = require('express');
const ProductModel = require('../models/product-model.js');
const router = express.Router();

router.get('/products', (req, res, next) => {
  ProductModel.find(
    // { price: { $gt: 10 } },
    // { name: 1, price: 1, _id: 0 },
    (err, productResults) => {
    if (err) {
      //use next() to skip to the ERROR page
      next(err);
      return;
    }

    // display product-list-view.ejs
    // the render methods knows to automatically look inside
    // the views folder
    res.render('product-views/products-list-view.ejs', {
      productsAndStuff: productResults
      // transfer of information to the view 
    });
  });
});

module.exports = router;
