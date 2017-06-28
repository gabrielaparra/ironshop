const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema( {
  content: { type: String },
  stars: { type: Number },
  author: { type: String }
});

const ReviewModel = mongoose.model('Review', reviewSchema);
//'Review' -> 'reviews' -> db.reviews.find()
// Collection name is automatically determined by Mongoose

//creating a review will be updating an existing product
//rather than creating a new one

module.exports = ReviewModel;
