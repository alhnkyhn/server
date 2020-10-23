var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var dataSchema = new Schema({
    data: String,
    translate: String,
    type: String
},{
  timestamps: true
});

module.exports = mongoose.model("Warehouse", dataSchema);