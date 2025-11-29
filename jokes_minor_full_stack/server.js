
const express= require("express")
const cors=require("cors")
const path=require("path")

const app=express()


const PORT=3000


app.use(cors());
app.use(express.json());

// server static files 
// FRONT END. <-> BACKEND 
app.use(express.static(path.join(__dirname,"public"))); 

let jokes=[
    { id: 1, text: "Why don’t programmers like nature? It has too many bugs." },
  { id: 2, text: "Debugging: Removing the needles from the haystack." },
  { id: 3, text: "There are only 10 kinds of people: those who understand binary and those who don’t." }
];


let nextJokesId=4;
// get all jokes
app.get("/api/jokes",(req,res)=>{
    res.json(jokes);
})
// get a random joke
app.get("/api/jokes/random",(req,res)=>{
    if(jokes.length===0) return res.json(404).json({error:"no jokes presrnt"});

    const randomIndex=Math.floor(Math.random()*jokes.length);
    res.json(jokes[randomIndex]);
})

// add a new joke

app.post("/api/jokes",(req,res)=> { 
    const {text}=req.body;
    if(!text) return res.json(404).json({error:" joke text is required"});


    const joke={
        id:nextJokesId++,
        text:text.trim()
    };

    jokes.push(joke);
    res.status(201).json(joke);
})

app.listen(PORT,()=>{
    console.log("JOkes running");
})



