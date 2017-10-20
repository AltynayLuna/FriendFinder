// A GET route with the url /api/friends. This will be used to display 
// a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey 
// results. This route will also be used to handle the compatibility logic.

var path = require("path");
var getMatch = require("../data/friends.js");

module.exports = function(app) {
	app.post("/api/friends", function(req, res) {
		var friends = getMatch(req.body.scores);
		res.json(friends);
	});
	app.post("api/new", function(req, res) {
		var newfriend = req.body;
		newfriend.routeName = newfriend.name.replace(/\s+/g, "").toLowerCase();
		friends.push(newfriend);
		res.json(newfriend);
	});	
}