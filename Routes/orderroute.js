const express=require("express")
const order =require("../models/ordermodel")
const route=express.Router()
module.exports=route
route.post("/add",async(req,res)=>{
    try{
     const Data=await order.create({...req.body})
     if(Data){
        return res.status(200).json({
             status:"success",
             message:"data added successfully",
            
        })
     }
     else{
        return res.status(404).json({
            status:"failed"
          })
    }

    }
    catch(e){
      return res.status(404).json({
        status:"failed"
      })
    }
})
route.get("/:orderid",async(req,res)=>{
    try{
        const data= await order.findone(req.params.orderid)
        if(data){
            const info=order.find(data)
            return res.status(200).send(info).json({
                status:"success",
                data
               
           })
        }
        else{
            return res.status(404).json({
                status:"failed"
              })
        }
    }
    catch(e){
        return res.status(404).json({
            status:"failed"
          })
    }
})