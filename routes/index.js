var express = require('express');
var router = express.Router();
var moment = require('moment');
var html_dir = './public/';
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET second page */

router.get('/about', function(req,res, next){
	res.render('about', {title: 'About'})
});

/*GET forecast */
router.get('/forecast', function(req,res) {
	var db = req.db;
	var collection = db.get('f_cast');
	collection.find({}, {}, function(e,docs){
		res.render('forecast', {
			"forecast" : JSON.stringify(docs),
			 moment : moment
		});
	});
	//res.render('forecast', {forecast: 'hepp'})
    
});

//GET vindvarsel
router.get('/vind', function(req,res) {
    var db = req.db;
    var collection = db.get('f_cast');
    collection.find({}, {}, function(e,docs){
		res.render('map', {
			 title : "vindtest",
			"forecast" : docs,
			 moment : moment
		});
	});
	
});

router.get('/iterate', function(req,res){

	res.sendfile('public/iterate.html');
});


router.get('/windyty', function(req,res){
    //res.sendfile('public/windyty.html');  
	res.redirect('http://embed.windyty.com/?surface,wind,now,59.554,10.717,8,,menu,,')
});

module.exports = router;
