var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var logger = require("morgan");

var request = require("request");

var app = express();
var PORT = process.env.PORT || 3000;

// app.use(logger('dev'));
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.text());
// app.use(bodyParser.json({type:"application"}))

app.use(express.static("public"));

var db = process.env.MONGODB_URI || "mongodb://localhost/nytreact";

mongoose.connect(db, function(error){
	if (error){
		throw error;
	} else {
		console.log("Connected to mongoose");
	}
})

app.listen(PORT, function(){
	console.log("App running on port", PORT);
});