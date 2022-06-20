const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    
        "first_name": {type:String},
        "last_name": {type:String},
        "email": {type:String},
        "gender": {type:String},
        "ip_address": {type:String},
        "age": {type:Number}
      
})

const User = mongoose.model('users',userSchema)
module.exports=User