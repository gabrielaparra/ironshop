const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: { type: String },
  price: { type: Number, default: 1 },
  imageUrl: { type: String, default: 'images/product.gif' },
  description: { type: String }
});

const Product = mongoose.model('Product', productSchema);

//Ironshop is the database,
//Product is the model
//products is the collection
//collection name is automatically determined by mongoose
//by turning the model name into plural

module.exports = Product;
