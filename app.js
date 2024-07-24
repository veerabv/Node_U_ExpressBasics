const http = require("http");

const express = require("express");

const app = express();
app.use((req,res,next) => {
  console.log('In the middleware');
  // console.log(`Request URL: ${req.url}`); //the function triggered two times because we run the code in browser
  next(); // Allows the request to continue to the next middleware in line
});

app.use((req,res,next) => {
  console.log("In another middleware");
  res.send(`<h1>Hello from Express.js</h1>`)
})

// const server = http.createServer(app);
// console.log("in server!!!!!!");

// server.listen(8080, () => {
//   console.log("Server is running on port 8080");
// });

app.listen(8080) //this will do  both the things what we do in th above coment lines 



