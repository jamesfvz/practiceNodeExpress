var express = require('express');
var router = express.Router();

const Ads = require ('../models/Ads')

/* GET /api/ads */
module.exports= {
    getAds: async (req, res, next) =>{
    try {
  
      const nombre = req.query.nombre;
      const venta = req.query.venta;
      const precio = parseFloat(req.query.precio);
      const tags = req.query.tag;
      const limit = parseInt(req.query.limit);
      const skip = parseInt(req.query.skip);
      const fields = req.query.fields;
      const sort = req.query.sort;
  
      const filtro = {};
  
      if (nombre) {
        filtro.nombre = nombre
      }
  
      if (venta) {
        filtro.venta = venta
      }
  
      if(precio){
        filtro.precio = precio
      }
  
      if(tags){
        filtro.tags = tags
      }
  
      const resultado = await Ads.lista(filtro, limit, skip, fields, sort);
      console.log(resultado)
      return resultado;
    } catch (err) {
      next(err);
    }
  }
}   
  