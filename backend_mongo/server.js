const express=require("express");
const mongoose=require("mongoose");

const cors=require("cors")
const path=require("path")

const Product=require("Product");
const CartItem=require("CartItem");

const app=express();

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname,"public")));

mongoose.connect()
.then(()=>console.log("MonogDB connected"));

// add to cart 
app.post("/api/cart",async (req,res)=>{
    const {productId}=req.body;
    let item =await CartItem.findOne({productId});
    if(item){
        item.quantity++;
        await item.save();
    }
    else{
        item = await CartItem.create({productId});
    }
    res.json(item);
})
// delete 
app.delete("/api/cart/:id",async (req,res)=>{
    await CartItem.findIdAndDelete(req.params.id);
    res.json({message:"Item Delete"})
})
// delete all -> CartItem.deletMany({})
app.listen(3000,()=>console.log("server running!"))