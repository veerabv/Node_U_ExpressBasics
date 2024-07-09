const http = require("http");

const express = require("express");

const app = express()
const server = http.createServer(app);

server.listen(8080, () => {
  console.log("Server is running on port 8080");
});



