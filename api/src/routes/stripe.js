const express = require("express");
const Stripe = require("stripe");
const stripe = new Stripe("sk_test_51LVI0BEPq0jIoDO7gN90XjPPdqOKGEBpbyGRqaVaVhjY46eVZSi1FQ3dvKe3VPRmNPYIK9fDi50VvNXMxEgbJ29500Xewsx5Zj");

const router = express.Router();

router.post("/", async (req, res) => {
  // you can get more data to find in a database, and so on
  const { id, amount } = req.body;

  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description: "Gaming Keyboard",
      payment_method: id,
      confirm: true, //confirm the payment at the same time
    });

    console.log(payment);

    return res.status(200).json({ message: "Successful Payment" });
  } catch (error) {
    console.log(error);
    return res.json({ message: error.raw.message });
  }
});

module.exports = router;