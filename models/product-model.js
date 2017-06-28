const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ReviewModel = require('./review-model.js');

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,   //minlength & maxlength for strings ONLY
    maxlength: 25
  },
  price: {
    type: Number,
    default: 1,
    min: 0,       //min & max for numbers ONLY
    max: 9999999
  },
  imageUrl: { type: String, default: 'images/product.gif' },
  description: { type: String },
  //Add a field inside of the product document called 'reviews'
  //The field is an array of ReviewModel objects, each with
  //content, stars, and author
  reviews: [ ReviewModel.schema ]
  //schema of the ReviewModel, different from the Schema const
});

const ProductModel = mongoose.model('Product', productSchema);

//Ironshop is the database,
//Product is the model
//products is the collection
//collection name is automatically determined by mongoose
//by turning the model name into plural

module.exports = ProductModel;
