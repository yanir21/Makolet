const mongoose = require("mongoose");
const ProductSchema = require("./product").ProductSchema;

const ShoppingCartSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  products: [ProductSchema],
});

const ShoppingCart = mongoose.model("ShoppingCart", ShoppingCartSchema);

module.exports = { ShoppingCart };
