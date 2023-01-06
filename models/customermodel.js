const mongoose = require('mongoose')
const schema =mongoose.Schema;
const customerSchema=new schema({
    customer_id:{type:String,require:true},
    customer_name:{type:String,require:true},
    email:{type:String,require:true},
    balance:{type:Number,require:true},
})
module.exports=mongoose.model("customer",customerSchema)