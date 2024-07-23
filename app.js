const http = require("http");

const express = require("express");

const app = express();
app.use((req,res,next) => {
  console.log('In the middleware');
  next(); // this allows to the next funtion of the app if we not give this it will stop in the function only
});

app.use((req,res,next) => {
  console.log("In another middleware");
})

const server = http.createServer(app);
console.log("in server!!!!!!");

server.listen(8080, () => {
  console.log("Server is running on port 8080");
});



