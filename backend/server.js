// in memory -> movie detail
// in memory -> RAM -> 

const express = require("express")
const cors=require("cors")

const app=express()
const PORT=3000;

app.use(cors());
app.use(express.json())


let movies=[];
let nextMovieId=1;
let nextReviewId=1;

function calculateAvgRating(movie){
    if(!movie.reviews || movie.reviews.length===0) return null;
    const sum=movie.reviews.reduce((acc,r)=> acc+ r.rating,0);
    return Number((sum/movie.reviews.length).toFixed(1));
}

// BE -> Health 

app.get("/health",(req,res)=>{
    res.json({status:"ok",message:"Movie Rating is running"});
})
// get req get all movies 
app.get("/movies",(req,res)=>{
    const result=movies.map((m)=>({
        id:m.id,
        title: m.title,
        year:m.year,
        avgRating:calculateAvgRating(m),
        totalReviews:m.reviews.length,

    }));
    res.json(result)
});

// create a movie
app.post("/movies", (req,res)=>{
    const {title,year} = req.body ; 
    if(!title || !year) {
        return res.status(400).json({error:"title and year are required"});
    }
    const movie={
       id:nextMovieId++,
        title,
        year,
       reviews:[]
    };
    movies.push(movie);
    res.status(201).json(movie);
})
// get a single movie -> /movies/1
app.get("/movies/:id",(req,res)=>{
    const movieId=Number(req.params.id);
    const movie =movies.find((m)=> m.id===movieId);
    if(!movie) return res.status(404).json({error:"Movie Not Found"});
   
    const avgRating=calculateAvgRating(movie);
  
    res.json({...movie,avgRating});

})
// add a review to a movie
app.post("/movies/:id/reviews",(req,res)=>{
      const movieId=Number(req.params.id);
      const {user,rating,comment}=req.body;
    const movie =movies.find((m)=> m.id===movieId);

   if(!movie) return res.status(404).json({error:"Movie Not Found"});

   // .... todo 

})

// get all reviews fr a movie 

// err 
app.use((err,req,res,next)=>{
    console.log("Unexpected err",err);
    res.status(500).json({error:"Something wentwrong"});
})

app.listen(PORT,()=>{
    console.log('Server is running');
})

// local system -> localhost 
// aws -> deploy -> public 