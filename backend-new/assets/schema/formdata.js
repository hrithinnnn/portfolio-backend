const mongoose=require('mongoose')

const dataSchema =mongoose.Schema({
    company:String,
    firstName:String,
    lastName:String,
    email:String,
    comments:String
})

module.exports=mongoose.model('data',dataSchema)