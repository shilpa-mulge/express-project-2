const path = require("path");

const express = require("express");
const productController = require("../controller/product");

const router = express.Router();

router.get("/", productController.getProductData);

module.exports = router;
