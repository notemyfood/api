var r = require('rethinkdbdash')();

// Create new item in your database and return its id
exports.create = function (user, text, cb) {
  var obj = r.db('notemyfood').table('foods').run();
  console.log(obj);
  return true
}

// Get a particular item
exports.get = function(req, res, next) {
   var obj = r.db('notemyfood').table('foods').run();
  console.log("Object is above");
  console.log(obj);

  res.sendStatus(200);
}

// Get all items
exports.all = function(cb) {
  cb(null, [])
}

// Get all items by a particular user
exports.allByUser = function(user, cb) {
  cb(null, [])
}


// var err = async r.db('notemyfood').run();
var err = async function (name) {
  console.log (name);
};

err("Amol")
// async function read () {
//   console.log(txt);
// }
// r.db('notemyfood').table('foods').run().then(function(result) {
//     console.log(result);
//     console.log('result');
//   }).error(function(error) {console.log(error)})

// if r.db('notemyfood')
// try {
//   r.db('notemyfood').run()
//   throw "H"
// }
// catch (err) {
//   console.log('hey')
//   console.log(err)
// }
// console.log(r.db('notemyfood').run() instanceof Error);