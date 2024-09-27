const mongoose=require('mongoose')

const citiesSchema=new mongoose.Schema({
    City:{
        type:String,
        required:true
    },
    State:{
        type:String,
        required:true
    },
    District:{
        type:String,
        required:true
    }
})
const CityModel=mongoose.model('City',citiesSchema)
module.exports=CityModel;