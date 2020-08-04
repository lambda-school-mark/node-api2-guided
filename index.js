const express = require("express");

const hubsRouter = require("./hubs/hubs-router.js");
const clientsRouter = require("./clients/clients-router.js");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.send(`
    <h2>Lambda Hubs API</h>
    <p>Welcome to the Lambda Hubs API</p>
  `);
});

// if the url begins with /api/hubs
server.use("/api/hubs", hubsRouter);
server.use("/clients", clientsRouter);

server.get("/products", (req, res) => {
  res.status(200).json({ router: "products" });
});

server.get("/orders", (req, res) => {
  res.status(200).json({ router: "orders" });
});

server.get("/suppliers", (req, res) => {
  res.status(200).json({ router: "suppliers" });
});

// add an endpoint that returns all the messages for a hub
// add an endpoint for adding new message to a hub

server.listen(4000, () => {
  console.log("\n*** Server Running on http://localhost:4000 ***\n");
});
