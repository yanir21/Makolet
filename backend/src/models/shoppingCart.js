const mongoose = require("mongoose");
const ProductSchema = require("./product").ProductSchema;

const ShoppingCartSchema = new mongoose.Schema({
  products: [{ product: ProductSchema, quantity: Number }],
});

const ShoppingCart = mongoose.model("ShoppingCart", ShoppingCartSchema);

module.exports = { ShoppingCart };
