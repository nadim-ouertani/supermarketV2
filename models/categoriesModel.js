const mongoose = require('mongoose');

const categorieSchema = new mongoose.Schema(
  {
    name: String,
    icon: String
  },
  {
    collection: 'categories'
  }
);

const Categories = mongoose.model('Categories', categorieSchema);

module.exports = Categories;
