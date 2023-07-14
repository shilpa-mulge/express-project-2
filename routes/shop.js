const path = require("path");

const express = require("express");
const productController = require("../controller/products");

const router = express.Router();

router.get("/", productController.getProductData);

module.exports = router;
