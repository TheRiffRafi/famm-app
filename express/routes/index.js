var express = require('express');
var router = express.Router();
var cors = require('cors');
const { Client } = require('@elastic/elasticsearch')

router.use(cors());

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


const client = new Client({
  node: 'https://localhost:9200',
  auth: {
    apiKey: 'UEZfejZZRUI0UTJGN1lpQ2Q2WFY6NmFSZmSOWktZnJtRm9BUGlnQQ'
  },
  caFingerprint: '8D:85:E7:38:DB:67:CE:43:80:E1:07:F0:3D:55:DE:61:BD:8E:DC:DF:26:C4:E2:E0',
  tls: {
    // might be required if it's a self-signed certificate
    rejectUnauthorized: false
  }
})

/* async function indexDoc () {
  await client.index({
    index: 'famm-users',
    document: req.body
  })
  console.log(document)
} */

router.post('/', function(req, res) {
  client.index({
    index: 'famm-users',
    document: req.body
  })
  res.send([req.body])
});

module.exports = router;
