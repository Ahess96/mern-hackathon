const Order = require('../../models/order');
const Item = require('../../models/item');

module.exports = {
  cart,
  addToCart,
  setItemQtyInCart,
  checkout,
  getPaidCartController
};

// A cart is the unpaid order for a user
async function cart(req, res) {
  const cart = await Order.getCart(req.user._id);
  console.log(cart, 'just carts in cart controller')
  res.json(cart);
}

// Add an item to the cart
async function addToCart(req, res) {
  const cart = await Order.getCart(req.user._id);
  await cart.addItemToCart(req.params.id);
  console.log(cart, 'cart in addToCart controller')
  res.json(cart);
}

// Updates an item's qty in the cart
async function setItemQtyInCart(req, res) {
  const cart = await Order.getCart(req.user._id);
  await cart.setItemQty(req.body.itemId, req.body.newQty);
  res.json(cart);
}
//copied from setItemQtyInCart and removed line28
async function getPaidCartController(req, res) {
  const paidCart = await Order.getPaidCart(req.user._id);
  console.log(paidCart, 'cart in getPaidCartController')
  res.json(paidCart);
}

// Update the cart's isPaid property to true
async function checkout(req, res) {
  const cart = await Order.getCart(req.user._id);
  console.log(cart, 'cart in checkout controller')
  cart.isPaid = true;
  await cart.save();
  res.json(cart);
}
