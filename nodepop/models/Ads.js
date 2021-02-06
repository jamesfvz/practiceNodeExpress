
const mongoose = require('mongoose');

const adSchema = mongoose.Schema({ 

       nombre: String, 
       venta: Boolean,
       precio: Number,
       foto: String,
       tags: [String]
    }
    //, {collection:'ads'}
    );

    adSchema.statics.lista = function(filtro, limit, skip, fields, sort) {
      const query = Ads.find(filtro);
      query.limit(limit);
      query.skip(skip);
      query.select(fields);
      query.sort(sort);
      return query.exec();
    }


    const Ads= mongoose.model('Ads',adSchema);

    module.exports=Ads