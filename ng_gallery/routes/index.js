var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if (req.cookies.mytoken) return res.redirect('/profile');
  res.render('index', { title: 'Photo Gallery' });
});

router.get('/register', function(req, res, next){
  if (req.cookies.mytoken) return res.redirect('/profile');
  res.render('register');
});

router.get('/login', function(req, res, next){
  if (req.cookies.mytoken) return res.redirect('/profile');
  res.render('login');
})

module.exports = router;
