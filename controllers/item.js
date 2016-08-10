var express = require('express')
  , router = express.Router()
  , item = require('../models/item')

router.get('/:id', function(req, res) {
  console.log('Hey')
  item.get(req.params.id, function (err, item) {
    // res.render('items/item', {item: item})
  })
})

module.exports = router