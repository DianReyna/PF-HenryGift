const express = require("express");
const Stripe = require("stripe");

require("dotenv").config();

const stripe = new Stripe(
  "sk_test_51LVI0BEPq0jIoDO7gN90XjPPdqOKGEBpbyGRqaVaVhjY46eVZSi1FQ3dvKe3VPRmNPYIK9fDi50VvNXMxEgbJ29500Xewsx5Zj"
);

const router = express.Router();

router.post("/create-checkout-session", async (req, res, next) => {
  try {
    const line_items = req.body.cartItems.map((item) => {
      return {
        price_data: {
          currency: "usd",
          product_data: {
            name: item.name,
            images: [item.image && item.image.url],
            metadata: {
              id: item.id,
            },
          },
          unit_amount: item.price * 100,
        },
        quantity: item.cartQuantity,
      };
    });

    const session = await stripe.checkout.sessions.create({
      line_items,
      mode: "payment",
      success_url: `${URL}/checkout-success`,
      cancel_url: `${URL}/cart`,
    });

    res.send({ url: session.url });
  } catch (error) {
    next(error);
  }
});

const URL = `http://127.0.0.1:5173`
// const URL = `https://henry-gift.vercel.app`;

module.exports = router;
