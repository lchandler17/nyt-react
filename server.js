// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// Require Click schema
var Articles = require("./models/articles");

// Create a new express app
var app = express();
// Set initial port
var PORT = process.env.PORT || 3000;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));

// -------------------------------------------------

// MongoDB configuration
mongoose.connect("mongodb://nytreact");
var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// -------------------------------------------------

// Main "/" route to redirect the user to rendered React application
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

// send GET requests to retrieve our most recent article data
app.get("/api/saved", function(req, res) {

  Articles.find({}).exec(function(err, articles) {
    if (err) {
      console.log(err);
    }
    else {
      res.send(articles);
    }
  });
});

app.post("/api/saved", function(req, res) {

  Articles.insert


});

app.delete("/api/saved", function(req, res) {

});

// -------------------------------------------------

// Starting our express server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
