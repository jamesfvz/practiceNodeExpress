var express = require('express');
var router = express.Router();

const comun = require('../../utils/comun')
const Ads = require ('../../models/Ads')

/* GET /api/ads */
router.get('/', async function(req, res, next) {
  try {
    
    const resultado = await comun.getAds(req,res,next)
    res.json(resultado);
  
  } catch (err) {
    next(err);
  }
});
  

// GET /api/ads:id
// Obtener un anuncio
router.get('/:id', async (req, res, next) => {
  try {
    const _id = req.params.id;

    const ad = await Ads.findOne({ _id: _id });

    if (!ad) {
      return res.status(404).json({ error: 'not found' });
    }
    res.json({ result: ad });

  } catch (err) {
    next(err);
  }
});

// POST /api/ads (body)
// Crear un anuncio
router.post('/', async (req, res, next) => {
  try {
    const adData = req.body;

    const ad = new Ads(adData);

    const adCreado = await ad.save();
   
    res.status(201).json({ result: adCreado });

  } catch (error) {
    next(error);
  }
});

// PUT /api/ads:id (body)
// Actualizar un anuncio
router.put('/:id', async (req, res, next) => {
  try {
    const _id = req.params.id;
    const adData = req.body;

    const adActualizado = await Ads.findOneAndUpdate({ _id: _id }, adData, { 
      new: true,
      useFindAndModify: false
    });

    if (!adActualizado) {
      res.status(404).json({ error: 'not found' });
      return;
    }

    res.json({ result: adActualizado });
  } catch (error) {
    next(error);
  }
});

// DELETE /api/ads:id
// Elimina un auncio
router.delete('/:id', async (req, res, next) => {
  try {
    const _id = req.params.id;

    await Ads.deleteOne({ _id: _id });

    res.json();
  } catch (error) {
    next(error);
  }
});

module.exports= router