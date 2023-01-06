const express =require("express")
const mongoose=require("mongoose")
const app=express();
const bodyparser=require("body-parser")
const products=require("./Routes/productroute")
const orders=require("./Routes/orderroute");
const customers=require("./Routes/customerroute")
const port=process.env.PORT||3000
app.listen(port,()=>console.log(`app is listening at${port}`))
mongoose.connect('mongodb+srv://Sivateja:Siva@1221@cluster1.0i0yqpc.mongodb.net/?retryWrites=true&w=majority',err=>{ if(err){
    console.log("database not connected")
}
else{
    console.log("connected to database")
}});
   

app.use(bodyparser.json())
app.use("/product",products)
app.use("/customer",customers)
app.use("/order",orders)

