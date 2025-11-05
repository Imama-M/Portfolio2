var express = require('express');
var router = express.Router();

/* GET home page. */
// 127.0.0.1(/)
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET home page. */
router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET About page. */
router.get('/about', function(req, res,next) {
  res.render('about', { title: 'About Me' });
});

/* GET Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

/* GET Contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});
module.exports = router;