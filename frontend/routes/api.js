var express = require('express');
var router = express.Router();

var blogs = [
  {title: 'Blog 1'},
  {title: 'Blog 2'},
];

/* GET home page. */
router.get('/blogs', function(req, res, next) {
  res.json({
    blogs: blogs
  });
});

module.exports = router;

