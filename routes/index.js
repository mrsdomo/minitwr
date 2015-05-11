var express = require('express');
var router = express.Router();

var tweets = [];


router.get('/', function (req, res, next) {
    res.render('index', { tweets: tweets } );
});

router.post('/tweets', function (req, res, next) {
  tweets.unshift(req.body.tweetText);
  res.redirect('/');
});

module.exports = router;
