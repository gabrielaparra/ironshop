const express = require('express');
const router = express.Router();
const ProductModel = require('../models/product-model.js');

//Route #1 -> display the form to create a new review
router.get('/products/:productId/reviews/new', (req, res, next) => {
  ProductModel.findById (
    req.params.productId,          //1st arg -> product ID
    (err, productFromDb) => {      //2nd arg -> callback
      if (err) {
        // use next to skip to the ERROR page
        next(err);
        return;
      }
      res.locals.productDetails = productFromDb;
      res.render('review-views/new-review-view.ejs');
    }
  );
});

//Route #2 -> receive that form submission and do database stuff

module.exports = router;
