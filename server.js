const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const basicAuth = require('express-basic-auth')
 
app.use(basicAuth({
    users: { 'test': 'pass1234' }
}))

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({ message: "Welcome to bezkoder application." });
  });

  require("./app/routes/customer.routes.js")(app);

  
  // set port, listen for requests
  app.listen(3000, () => {
    console.log("Server is running on port 3000.");
  });