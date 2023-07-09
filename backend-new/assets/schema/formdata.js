const mongoose=require('mongoose')

const dataSchema =mongoose.Schema({
    date:String,
    company:String,
    firstName:String,
    lastName:String,
    email:String,
    comments:String
})

module.exports=mongoose.model('data',dataSchema)