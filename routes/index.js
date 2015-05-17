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

router.get('/Welcome', function(req, res, next) {
  res.render('Welcome', { tweets: tweets });
});

router.post('/Welcome', function(req, res, next) {
  tweets.unshift(req.body.tweet);
  res.redirect('Welcome')
});

router.get('/index', function(req, res, next) {
  res.render('index', { tweets: tweets });
});

router.post('/index', function(req, res, next) {
  tweets.unshift(req.body.tweet);
  res.redirect('index')
});

module.exports = router;



