/*
 jWT -> json web token -> signed proof of authentication 
 info transfer btw client and server 
 Old way -> server session data , client send session id 
 JWT -> no storing of session ,client stores token , stateless 
  xxxx.yyyy.zzzz
  Header.payload.signature 
  header-> {
  alg: "HS256",
  "typ":"JWT"
  }

  {
  id:"cb",
  "username":"kajnjansa"
  }
  {
  signature:header+payload+Secret
  }

  User log in -> server verify creds -> server gen. jwt client stores jwt 
  client with every req send jwt server verifies jwt request allowed /.blocked

  jwt.verify()-> signature match

  secret ->private key sign and verify jwts 

  token -> they should expire 

  client -> memory localstorage HTTP cookies 

  JWT -> ID CARD 
  Secret -> Government employye 
  Verify -> in office 

Access token -> used fr protected apis  , sent with every request 
Refresh Token -> used to get new access token , without loggin in again 
(DB/cookies)
Netflix 
Access token expires -> FE calls (refresh) -> new access token -> user continues 
 LOGIN -> access token (15 min ) -> Refresh token( 7 days )-> user calls api
 with access token -> access token expires 
 client calls calls new access token user continues (silent login )
*/

const { error } = require("console");
const express=require("express");
const jwt =require("jsonwebtoken");
const { use } = require("passport");
const app=express();

app.use(express.json());

const ACCESS_SECRET="access_secret";
const REFRESH_SECRET="refresh_secret";
const user=[{id:1,username:"user",password:"123"}];
let refresh_tokens=[];

app.post("/login",(req,res)=>{
    const{username,password}=req.body;
    const user = users.find(
        u=> u.username === username && u.password ===password 
    );
    if(!user) return res.status(401).json({error:"Invalid creds!"});
    const accessToken=jwt.sign(
        {id:user.id},
        ACCESS_SECRET,
        {expiresIn:"15s"}
    );
    const refreshToken=jwt.sign(
         {id:user.id},
        ACCESS_SECRET,
        {expiresIn:"7d"}
    )
    refresh_tokens.push(refreshToken)
    res.json({accessToken,refreshToken});
})

function authenticate(req,res,next){
    const authHeader= req.headers.authorization;

    if(!authHeader) return res.status(401).json({error:"Token mising"});

    const token=authHeader.split(" ")[1];

    try{
        const decoded=jwt.verify(token,ACCESS_SECRET);
        req.user=decoded;
        next();
    }
    catch{
        res.status(401).json({error:"Access token expired!"})
    }
}

app.get("/profile",authenticate,(req,res)=>{
    res.json({message:"Welcome!"})
})