
// Gen OTP 
// Send OTP 
// Verify OTP 
// Allow access to protected route 
// expiry 
// OTP verify -> session bnta h 
const express=require("express");
const app=express();
app.use(express.json());

let otps={}; // phone:{otp,expirytime}
let sessions={};// {token: phone}

app.post("/send-otp",(req,res)=>{
    const {phone}=req.body;
    if(!phone) return res.status(400).json({error:"Phone Required"});
    const otp=Math.floor(10000*Math.random()*900000);
    const expiresAt=DataTransfer.now()+ 2*60*1000; // 2min
    otps[phone]={otp,expiresAt};
    // twilio  // fast 2 msg 
    console.log("OTP sent!");
    res.json({message:"OTP sent "});
});

app.post("/verify-otp",(req,res)=>{
    const{phone,otp}=req.body;
    const record=otps[phone];
    if(!record) return res.status(401).json({error:"OTP not found"});
    if(Date.now()> record.expiresAt) return res.status(401)
        .json({error:"Expired"});
        if(record.otp!=otp)  return res.status(401).json({error:"Invlaid"});
        const token=Math.random().toString(36).substring(2);
        sessions[token]=phone;
        delete otps[phone];
        res.json({token});
})
function authenticate(req,res,next){
    const token = req.headers.token;
    if(!token || !sessions[token]) return res.status(401).json({error:"Unauth"});

    req.phone=sessions[token];
    next();
}
app.get("/profile",authenticate,(req,res)=>{
    res.json({
        message:"Logged in successful",
        phone:req.phone
    })
})

app.listen(3000,()=>{
    console.log("OTP 200!")
})








