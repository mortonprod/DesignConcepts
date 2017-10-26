var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/fast', function (req, res) {
    res.render('fast', { title: 'Fast' });
});
router.get('/blackwhite', function (req, res) {
    res.render('blackWhite', { title: 'Black and White' });
});
router.get('/clouds', function (req, res) {
    res.render('clouds', { title: 'Clouds' });
});
router.get('/', function (req, res) {
    res.render('virus', { title: 'Virus' });
});
router.get('/eye', function (req, res) {
    res.render('eye');
});

router.get('/router', function (req, res) {
    res.render('router');
});



module.exports = router;
