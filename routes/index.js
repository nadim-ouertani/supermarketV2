const express = require('express');

const itemController = require('./../controller/itemController');

const router = express.Router();

router.route('/').get(itemController.getHome);

router.route('/:category').get(itemController.getCategory);

router.route('/product/:code').get(itemController.getDetails);

module.exports = router;
