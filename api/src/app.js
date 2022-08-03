const express = require("express");
const routes = require("./routes/index.js");

const server = express();

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

// server.use(express.json);
server.use("/", routes);

server.get("/", (req, res, next) => {
  res.send("hola estas en /");
});

module.exports = server;