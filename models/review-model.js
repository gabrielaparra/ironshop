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

module.exports = ReviewModel;
