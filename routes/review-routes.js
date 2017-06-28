const express = require('express');
const router = express.Router();
const ProductModel = require('../models/product-model.js');
const ReviewModel = require('../models/review-model.js');

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
router.post('/products/:productId/reviews', (req, res, next) => {
  ProductModel.findById(
    req.params.productId,
    (err, productFromDb) => {
      if (err) {
        next(err);
        return;
      }
      const theReview = new ReviewModel ({
        author: req.body.reviewAuthor,
        stars: req.body.reviewStars,
        content: req.body.reviewContent
      });
      //Adding the review to the product, use push because 'reviews'
      //is an array within the Product
      productFromDb.reviews.push(theReview);

      //Save th product with the new review
      productFromDb.save((err) => {
        if (err) {
          next(err);
          return;
        }

        res.redirect('/products/' + productFromDb._id);
      });
    }
  );    //end findById
});   //end POST route


module.exports = router;
