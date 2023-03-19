var express = require('express');
var router = express.Router();
var parser = require('body-parser')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/',function(req,res,next) {
  console.log(`First Name ${req.body.firstName}`)
  console.log(`Last Name ${req.body.lastName}`)
  res.send("POST RECEIVED!")
})

router.use(parser.urlencoded({extended: true}))



module.exports = router;
