
/*
passport .js -> Auth users 
plug in different auth strategy 
keep auth logic clean and reusable 

Strategy 
-> Local ->username,password

->Google 
-> JWT 


passport.authenticate("local")

// session / JWT 

done(err,user,info)->passport success /failure 
done(null,user)
done(null,false)
*/
const { error } = require("console");
const express=require("express");
const session=require("express-session");
const passport=require("passport");
const LocalStrategy=require("passport-local").Strategy;
const app=express();
app.use(express.json());
app.use(
    session({
        secret:"passport_secret",
        resave:false,
        saveUninitialized:false
    })
);
app.use(passport.initialize());
app.use(passport.session());


const users=[
    {id:1,username:"admin",password:"admin123"}
];
passport.use(
    new LocalStrategy((username,password,done)=>{

        const user=users.find(u=>u.username === username);

        if(!user) return done(null,false,{message:"User not found"})
            if(user.password!=password) {
                return done(null,false,{message:"Wrong password"})
            }
            return done(null,user);
    })
);

// serialise / deserialise  -> 
passport.serializeUser((user,done)=>{
    done(null,user.id);
})
passport.deserializeUser((id,done)=>{
    const user=users.find(u=>u.id===id);
    done(null,user);
})
// login 
app.post("/login",passport.authenticate("local"),(req,res)=>{
    res.json({message:"Login 200"})
});
app.get("/profile",(req,res)=>{
    if(!req.isAuthenticated()) return res.json({error:"Not authenticated"});
    res.json({user:req.user});
})

