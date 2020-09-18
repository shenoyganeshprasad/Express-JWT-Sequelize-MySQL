// Express
const express = require("express");
const app = express();

// Body-Parser
const bodyParser = require("body-parser");

// parse application/json
app.use(bodyParser.json());

// Add basic route
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Express is up",
  });
});

// Start the app
app.listen(8080, () => {
  console.log("SERVER STARTED");
});
