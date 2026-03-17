const express = require("express");
const router = express.Router();
const orderController = require("../controller/orderController");

router.post("/orders", orderController.createOrder);
router.get("/orders/:orderId", orderController.getOrder);

module.exports = router;