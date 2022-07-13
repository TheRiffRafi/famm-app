var express = require('express');
var router = express.Router();
var cors = require('cors');

router.use(cors());
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', (req, res) => {
  const data = [
    {"id":"1", "name":"rafi", "city":"bahia"}
  ]
  res.send(data)
})

module.exports = router;
