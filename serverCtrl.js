var app = require('./server.js');
var db = app.get('db');
module.exports = {

  myTest: function (req, res) {
    db.database_call([], function (err, results) {
      if(err){
        console.error(err);
        return res.send(err);
      }
      return res.send(results);
    })
  }

}
