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

//STEP #1 of form submission for a new product
router.get('/products/new', (req, res, next) => {
  res.render('product-views/new-product-view.ejs');
});

//STEP #2 of form submission for a new product
// <form method="post" action="/products">
router.post('/products', (req, res, next) => {
  const theProduct = new ProductModel ({
    name: req.body.productName,
    price: req.body.productPrice,
    imageUrl: req.body.productImageUrl,
    description: req.body.productDescription
  });

  theProduct.save((err) => {
    if (err) {
      next(err);
      return;
    }
    //if save is successful, redirect to a URL
    res.redirect('/products');
    //if we don't redirect we can refresh and duplicate the data
  });
});

router.get('/products/details', (req, res, next) => {
  //products/details?myId=...

  ProductModel.findById(
    req.query.myId,           //1st arg -> the ID to find in the DB
    (err, productFromDb) => {    //2nd arg -> callback
      if (err) {
        next(err);
        return;
      }

      res.locals.productDetails = productFromDb;

      res.render('product-views/product-details-view.ejs');
    }
  );
});

module.exports = router;
