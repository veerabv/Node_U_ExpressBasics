const express = require("express");

const router = express.Router();

// path => "/admin/add-product" method=> get
router.get("/add-product", (req, res, next) => {  // the path will be same for both req "/add-product " but the method is different
  res.send(`
      <form method="POST" action ="/admin/add-product">                          
      <input type="text" name="title"/>
      <button type='submit'>submit</button>
      </form>`);  // if we give "admin/add-product" in action attribute it will concat with the exisiting route like "/admin/admin/add-product" so include "/"before admin in action attribute
});
// path => "/admin/add-product" method=> post
router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
