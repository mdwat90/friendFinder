var friends = require("../data/friends");

// Displays all tables
module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        var newFriend = req.body;

        // function findMatch(newFriend) {
        var lowestDifference = null;
        var bestMatch = null;

        for (var i = 0; i < friends.length; i++) {
            var currentFriend = friends[i];
            var currentFriendAnswers = currentFriend.answers;
            var totalDifference = 0;
            console.log(totalDifference, "Total difference");

            for (var j = 0; j < currentFriendAnswers.length; j++) {
                var difference = Math.abs(currentFriendAnswers[j] - newFriend.answers[j]);
                // console.log(difference, "current difference");
                totalDifference += difference;
            }
            console.log(totalDifference, "total difference");
            if (totalDifference < lowestDifference || lowestDifference == null) {
                lowestDifference = totalDifference;
                bestMatch = currentFriend
            }
        }


        friends.push(newFriend);
        
        res.send(bestMatch);
    });

};