const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  orderId: String,
  customerName: String,
  phone: String,
  items: [
    {
      product: String,
      price: Number,
      quantity: Number
    }
  ],
  totalAmount: Number,
  status: {
    type: String,
    default: "Pending"
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});



module.exports = mongoose.model("Order", orderSchema);