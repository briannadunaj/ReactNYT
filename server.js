var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var logger = require("morgan");
var axios = require("axios");

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

app.get("/", function (req, res){
	res.sendFile("index.html");
})

// /// ROUTES 
// app.get("/scrape", function(req, res) {
// 	console.log("scrape");
//   request("https://www.reddit.com/r/space/", function(error, response, html) {
//     var $ = cheerio.load(html);
    
//     $("p.title").each(function(i, element) {

//       var result = {};

//       result.title = $(this).text();
//       result.link = $(this).children().attr("href");

// 			var entry = new Article(result);

// 			entry.save(function(err, doc){
// 				if (err) {
// 					console.log(err);
// 				} else {
// 					console.log(doc);
// 				}
// 			}); // end of entry.save
// 		}); // end of each function
// 	}); // end of request

// 	res.send("Scrape Complete");
// }); // end of app.get /scrape

