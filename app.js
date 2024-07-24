
const express = require("express");


const parsser = require("body-parser");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended : false}))

app.use("/add-product", (req, res, next) => {
  res.send(`
    <form method="POST" action ="/product">
    <input type="text" name="title"/>
    <button type='submit'>submit</button>
    </form>`);
});

app.post("/product", (req, res, next) => {  // here this will be triggered only for post method
 console.log(req.body)  // this will be undefined because we have to parse the body from req
  res.redirect("/");    // after using body parser we can get the body as an object
});

app.use("/", (req, res, next) => {
  res.send("<h1>Hello from Express!</h1>");
});

app.listen(8080); //this will do  both the things what we do in th above coment lines
