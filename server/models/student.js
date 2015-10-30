var mongoose = require('mongoose-q') (require('mongoose'), {spread:true});
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Student = new Schema ({
  fname: String,
  lname: String,
  age: Number,
  married: Boolean
});



mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/students');
module.exports = mongoose.model("students", Student);
