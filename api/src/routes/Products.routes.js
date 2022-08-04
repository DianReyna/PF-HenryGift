const { Router } = require("express");
const router = Router();
const { Products, Provider } = require("../database/index.js");

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const productById = await Products.findOne({
      where: {
        id: id,
      },
      include: [Provider],
    });
    res.send(productById);
  } catch (error) {
    console.log(error);
  }
});

router.post("/", async (req, res) => {
  const { body } = req;
  try {
    await Provider.create({
      name: body.provider,
      phone: body.phone,
      address: body.address,
      email: body.email,
    });

    const prov = await Provider.findOne({
      where: {
        name: body.provider,
      },
    });

    console.log(prov.dataValues.name);

    const x = await Products.create({
      name: body.name,
      description: body.description,
      price: body.price,
      location: body.location,
      image: body.image,
      provider_id: prov.dataValues.id,
    });
    res.send(x);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
