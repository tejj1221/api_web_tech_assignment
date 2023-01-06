const mongoose = require('mongoose')
const schema =mongoose.Schema;
const productSchema=new schema({
    product_id:{type:String,require:true},
    product_type:{type:String,require:true},
    product_name:{type:String,require:true},
    product_price:{type:Number,require:true},
    available_quantity:{type:Number,require:true},
})
module.exports=mongoose.model("product",productSchema)