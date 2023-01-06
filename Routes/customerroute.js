const express=require("express")
const customer =require("../models/customermodel")
const route=express.Router()
module.exports=route
route.post("/add",async(req,res)=>{
    try{
     const Data=await customer.create({...req.body})
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
route.get("/customerid",async(req,res)=>{
    try{
        const data= await customer.findone(req.customerid)
        if(data){
            return res.status(200).json({
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
route.get("/:customerid",async(req,res)=>{
    try{
        const data= await customer.findone(req.params.customerid)
        if(data){
            const info=customer.find(data)
            return res.status(200).send(info).json({
                status:"success",
               
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
route.put("/:email/:balance",async(req,res)=>{
    try{
        const email=await product.findone(req.params.email)
        const cost=await product.findone(req.params.balance)
        
         const data= product.updateone(req.body,{$set:{email:email,balance:(balance-cost)}})
         if(data){
         const info =product.find(data)
         return res.status(200).send(info).json({
            status:"success",  
         })
        }
        else if(customer.balance<=0){
            return res.status(500).json({
                message:"INSUFFICIENT FUNDS"
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