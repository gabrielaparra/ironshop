const express = require('express');
const Product = require('../models/product-model.js');
const router = express.Router();

router.get('/products', (req, res, next) => {
  Product.find((err, productResults) => {
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
    });
  });
});

module.exports = router;
