// SEED FILE
// a separate js file that saves things to the database
// (makes onboarding easier and it allows to re-populate the Database)
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ironshop');

const Product = require('../models/product-model.js');

const productInfoArray = [
  {
    name: 'Phone Case',
    price: 9.99,
    imageUrl: '../images/phone-case.gif',
    description: 'A cool phone case.'
  },
  {
    name: 'Bean Bag Chair',
    price: 25.99,
    imageUrl: '../images/bean-bag.gif',
    description: 'So comfy you\' fall sleep in a second'
  },
];

Product.create(
  productInfoArray,           //1st arg --> array of product info objects
  (err, productResults) => {  //2nd arg --> callback
    if (err) {
      console.log('OMG! Database error.');
      return;
    }

    productResults.forEach((product) => {
      console.log('New product! ' + product.name);
    });
  }
);
