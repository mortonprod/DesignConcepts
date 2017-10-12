var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/fast', function (req, res) {
    res.render('fast', { title: 'Express' });
});
router.get('/blackwhite', function (req, res) {
    res.render('blackWhite', { title: 'Express' });
});
router.get('/clouds', function (req, res) {
    res.render('clouds', { title: 'Express' });
});
router.get('/', function (req, res) {
    res.render('virus', { title: 'Express' });
});
router.get('/eye', function (req, res) {
    res.render('eye');
});



module.exports = router;
