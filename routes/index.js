var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/fast', function (req, res) {
    res.render('fast', { title: 'Express' });
});
router.get('/blackwhite', function (req, res) {
    res.render('blackWhite', { title: 'Express' });
});
router.get('/', function (req, res) {
    res.render('dots', { title: 'Express' });
});



module.exports = router;