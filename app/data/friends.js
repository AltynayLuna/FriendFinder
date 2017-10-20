var friends = [
  {
    "name":"J.R.Ewing",
    "photo":"https://i.ytimg.com/vi/GZV3365a7Ew/hqdefault.jpg",
    "scores":[
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
      ]
  },

  {
    "name":"Joffrey Baratheon",
    "photo":"https://vignette.wikia.nocookie.net/gameofthrones/images/4/47/Joffrey-baratheon-jack-gleeson.jpg/revision/latest/scale-to-width-down/306?cb=20170901221558",
    "scores":[
        3,
        4,
        5,
        1,
        2,
        3,
        4,
        5,
        2,
        5
      ]
  },

  {
    "name":"Trinity Killer",
    "photo":"https://vignette.wikia.nocookie.net/dexter/images/d/d8/TrinityK.jpg/revision/latest?cb=20130926080956",
    "scores":[
        1,
        3,
        5,
        4,
        1,
        1,
        2,
        3,
        4,
        5
      ]
  },

  {
    "name":"Gus Fring",
    "photo":"https://i.pinimg.com/736x/91/a7/eb/91a7eb8e343f85bc73dc19e9bcd1bdd3--gustavo-fring-gus-fring.jpg",
    "scores":[
        5,
        3,
        3,
        2,
        1,
        3,
        2,
        3,
        4,
        5
      ]
  },

  {
    "name":"Grotbags",
    "photo":"https://img.huffingtonpost.com/asset/595dd5fd2100003400fc589f.jpeg?cache=f1grj26ehf&ops=2000_1000",
    "scores":[
        1,
        2,
        2,
        4,
        3,
        1,
        4,
        5,
        4,
        1
      ]
  },
  {
    "name":"Hannibal Lecter",
    "photo":"http://assets2.ignimgs.com/2016/08/26/anthony-hopkins-as-dr-hannibal-lecter-injpg-42ca9a.jpg",
    "scores":[
        5,
        2,
        1,
        3,
        2,
        1,
        2,
        4,
        3,
        4
      ]
  }, 

  {
    "name":"Sideshow Bob",
    "photo":"https://i.ytimg.com/vi/lKyoopNi57U/hqdefault.jpg",
    "scores":[
        5,
        2,
        3,
        5,
        3,
        1,
        1,
        4,
        4,
        3
      ]
  }, 
  {
    "name":"Joker",
    "photo":"https://www.sideshowtoy.com/photo.php?sku=9031261",
    "scores":[
        1,
        2,
        3,
        3,
        4,
        3,
        5,
        3,
        4,
        1
      ]
  },
];

function getMatch(userScore) {
    var arrayOfScores = [];
    var currentLowestScore = 0;
    var lowestScoreIndex;
    for (var i = 0; i < friends.length; i++) {
        var currentFriend = friends[i];
        var diff = 0;
        for (var j = 0; j < currentFriend.scores.length; j++) {
            diff += currentFriend.scores[j] - userScore[j];
            diff = Math.abs(diff);
        }
        if(i == 0){ 
            currentLowestScore = diff;
            continue;
        }
        /* if the current difference is less than the previous lowest difference,
        overwrite it */
        if(diff < currentLowestScore){
            lowestScoreIndex = i;
            currentLowestScore = diff;
        }   
    }
    return friends[lowestScoreIndex];
}

module.exports = friends;
module.exports = getMatch;
