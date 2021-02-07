var express = require('express');
var router = express.Router();

const Ads = require ('../../models/Ads')

// Mostrar tags
router.get('/', async (req, res, next) => {
    try {
    
    
    const tagResult= await Ads.distinct("tags")
  
      res.json(tagResult);
    } catch (error) {
      next(error);
    }
  });


module.exports= router