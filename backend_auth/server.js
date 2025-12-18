
// role -> ADMIN -> can add /delte product 
// role -> user -> view 

const express=require("express");

const app=express();

app.use(express.json());

let products=[
    {id:1,name:"Laptop"},
    {id:2,name:"Phone"}
];
// role -> api -> header
function authorize(allowedRoles){
    return (req,res,next)=>{
        const role =req.headers.role;

         if(!role){
        return res.status(403).json({error:"ROle not provided"});
    }
    if(!allowedRoles.includes(role)){
        return res.status(403).json({error:"Access Denied"});
    }
     next();
    };
}
app.get("/products",authorize(["USER","ADMIN"]),(req,res)=>{
    res.json(products);
})
app.post("/products",authorize(["ADMIN"]),(req,res)=>{
    const product={
        id:products.length+1,
        name:req.body.name
    };
    products.push(product);
    res.json(product);
})
app.delete("/products/:id",authorize(["ADMIN"]),(req,res)=>{
    products=products.filter(p=>p.id!==req.params.id);
    res.json({message:"Product Deleted"});
});
app.listen(3000,()=>{
    console.log("Running!")
})


/*

function getRoleHeader(){
const role=document.ger
}

const res=await fetch(
"/",{
method:"POST",
headers:{
"Content-Type":"application/json",
headers:getRoleHeader()
}
})


*/