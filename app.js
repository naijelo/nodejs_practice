const http = require("http");
const express = require("express");

const app = express();

app.use("/page", (req, res, next) => {
  res.send("<h1>Page</h1>");
});

app.use("/", (req, res, next) => {
  res.send("<h1>Home</h1>");
});


const server = http.createServer(app);

server.listen(3000);