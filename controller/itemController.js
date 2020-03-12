const Item = require('./../models/itemModel');
const Categories = require('./../models/categoriesModel');

exports.getHome = async (req, res) => {
  const deal = await Item.find({ dealPrice: { $ne: null } });
  const discount = await Item.find({ discount: { $ne: null } });
  const categories = await Categories.find({});
  res.render('pages/index', {
    title: 'Royal nova V2',
    deal: deal,
    discount: discount,
    categories: categories
  });
};

exports.getCategory = async (req, res) => {
  const items = await Item.find({ category: req.params.category }).limit(9);
  const categories = await Categories.find({});
  res.render('pages/category', {
    title: req.params.category,
    items: items,
    categories: categories
  });
};

exports.getDetails = async (req, res) => {
  const categories = await Categories.find({});
  res.render('pages/itemDetails', { categories: categories });
};
