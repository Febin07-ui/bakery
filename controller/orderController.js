const Order = require("../models/order");

exports.createOrder = async (req, res) => {

  const orderId = "BK-" + Math.floor(1000 + Math.random() * 9000);

  const order = new Order({
    orderId,
    customerName: req.body.customerName,
    phone: req.body.phone,
    items: req.body.items,
    totalAmount: req.body.totalAmount
  });

  await order.save();

  res.json({
    message: "Order created",
    orderId: orderId
  });
};

exports.getOrder = async (req, res) => {

  const order = await Order.findOne({
    orderId: req.params.orderId
  });

  if (!order) {
    return res.json({ message: "Order not found" });
  }

  res.json({
    orderId: order.orderId,
    customerName: order.customerName,
    product: order.items[0].product,
    status: order.status
  });

};