// anuncios.json
require ('./connectMongoose')

const Ads = require('./../models/Ads')
const fs = require ('fs')

const data = fs.readFileSync(__dirname + '/anuncios.json',{encoding:'utf-8'})
const dataParse= JSON.parse(data)

const arrAds= dataParse.anuncios

async function  dropChargeDB(){

    if (Ads){
        try{
            await Ads.deleteMany({})
            await Ads.insertMany(arrAds)
            //await Ads.insertMany(dataParse)
            console.log(dataParse)
            console.log ("Data inserted")

        }catch (err){
            console.log(err)
        }
    }else{
        try{
            await Ads.insertMany(dataParse)
            console.log("Data inserted")
        }catch(err){
            console.log (err)
        }
    }
}

dropChargeDB()