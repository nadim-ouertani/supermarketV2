const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema(
  {
    name: String,
    code: Number,
    ppu: String,
    image: String,
    date: {
      type: Date,
      default: Date.now()
    },
    recommended: {
      type: Boolean,
      default: false
    }
  },
  {
    collection: 'products'
  }
);

const Items = mongoose.model('Item', itemSchema);

module.exports = Items;
