const express = require("express");
const morgan = require("morgan");
const { sequelize } = require("./src/database/index");
const routes = require("./src/routes/index");
const errorHandler = require("./src/middlewares/errorHandler");
// const setHeaders = require('./src/middlewares/setHeaders');
const { loadMockCategories } = require("./src/utils/categoriesMock");
const { loadMockProviders } = require("./src/utils/providersMock");
const { loadMockBoxes } = require("./src/utils/boxesMock");
const { loadMockUsers } = require("./src/utils/usersMock");
const cors = require("cors");

const PORT = process.env.PORT || 3001;

const app = express();

//set middlewares
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json({ limit: "50mb" }));
app.use(morgan("dev"));

var corsOptions = {
  origin: "https://henry-gift.vercel.app/",
};
//set headers
app.use(cors(corsOptions));

//centralize routes (bring routes from my index in src/routes)
app.use("/", routes);

//error handler middleware
app.use(errorHandler);

// set DB connection and express server
async function start() {
  try {
    await sequelize.sync({ force: true });
    app.listen(PORT, async () => {
      console.log("Server listening on port", PORT);
      await loadMockCategories();
      await loadMockBoxes();
      await loadMockUsers();
    });
  } catch (error) {
    console.log("Unable to connect to the database:", error);
  }
}

start();
