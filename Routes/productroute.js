const express=require("express")
const product =require("../models/productmodel")
const route=express.Router()
module.exports=route
route.post("/add",async(req,res)=>{
    try{
     const Data=await product.create({...req.body})
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
route.get("/:productid",async(req,res)=>{
    try{
        const data= await product.findone(req.params.productid)
        if(data){
            const info=product.find(data)
            res.status(200).send(info).json({
                status:"success"
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
route.get("/:producttype",async(req,res)=>{
    try{
        const data= await product.findone(req.params.producttype)
        if(data){
            const info=product.find(data)
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
route.put("/:productname/:availablequantity",async(req,res)=>{
    try{
        const name=await product.findone(req.params.productname)
        const quantity=await product.findone(req.params.availablequantity)
        const data= product.updateone(req.body,{$set:{product_name:name,available_quantity:quantity}})
        if(data){
        
         const info =product.find(data)
         return res.status(200).send(info).json({
            status:"success",  
         })
        }
        else if(product.available_quantity===0){
            return res.status(500).json({
                message:"ITEM IS OUT OF STOCK"
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