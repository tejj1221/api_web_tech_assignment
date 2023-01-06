const mongoose = require('mongoose')
const schema =mongoose.Schema;
const orderSchema=new schema({
    customer_id:{type:String,require:true},
    inventory_id:{type:String,require:true},
    item_name:{type:String,require:true},
    quantity:{type:Number,require:true},
})
module.exports=mongoose.model("order",orderSchema)