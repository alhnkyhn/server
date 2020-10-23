var express = require('express');
var router = express.Router();
/* Modeli Ekleme */
var dataModel = require("../models/dataModel");


/* Todo Listeleme Islemi Burada Yapilacak. */
router.get('/', function(req, res, next) {
  
    dataModel.find().then((datas) => {
      res.json(datas);
      var ObjectId = dataModel.Types.ObjectId(datas._id);  
      console.log(ObjectId.getTimestamp());
    }).catch((err) => {
      res.json(err);
    });
    
        
  
});

/* Todo Ekleme Islemi Burada Yapilacak. */
router.post("/", function(req, res, next){
 
    new dataModel({
      data: req.body.data,
      translate: req.body.translate,
      type: req.body.type
    }).save().then(() => {
        res.json("Kaydetme İşlemi Başarılı.");
    }).catch((err) => {
        res.json("Kaydetme İşleminde Hata Oluştu.");
    });
  
});

/* Todo Silme Islemi Burada Yapilacak. */
router.delete("/:id", function(req, res, next){
  
    var id = req.params.id;
    dataModel.findByIdAndRemove(id).then(() => {
        res.json("Silme İşlemi Başarılı.");
    }).catch((err) => {
        res.json("Silme İşleminde Hata Oluştu.");
    });
  
});

module.exports = router;