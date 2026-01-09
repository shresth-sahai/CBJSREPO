
// create project 
// enable email /password 
// service acc -> admin SDK private key -> connection + Download JSOn->firebase-admun.json
// firebase-admin
const express=require("express");
const admin=require("firebase-admin");
const app=express();
app.use(express.json());

// initialse 

admin.initializeApp({
    credential:admin.credential.cert(require("./firebase-admin.json"))
});

async function authenticate(req,res,next) {
    const authHeader=req.headers.authorization;

    if(!authHeader) return res.status(401).json({error:"Token Missing!"});

    const token=authHeader.split(" ")[1];

    try{
        const decodedToken=await admin.auth.verifyIdToken(token);
        req.user=decodedToken;
        next();
    }
    catch{

    }
}
app.get("/",(req,res)=>{
    res.json({message:"Public api"})
})
app.get("/profile",authenticate,(req,res)=>{
    res.json({
        message:"Authenticated User",
        user:req.user
    })
})
app.listen(3000,()=>{
    console.log("firebase running!")
})