const express=require("express")

const app=express();

app.use(express.json());

let tasks=[]
let nextId=1;


app.get("/",(req,res)=>{
res.json(tasks);
})

// get one task
app.get("tasks")


//post 


// put method -> replace entire resource 
//request body -> payload 
app.put("/tasks/:id",(req,res)=>{
    const index=tasks.find(t=>t.id === req.params.id);
    if(index==-1) return res.status(404).json({error:"Not Found"});
    tasks[index]={id:Number(req.params.id),title:req.body.title,done:req.body.done};
    res.json(tasks[index]);
})

// patch -> update only partial 
app.patch("/tasks/:id",(req,res)=>{
    const task=tasks.find(t=>t.id === req.params.id);
    if(!task) return res.status(404).json({error:"Not Found"});
    if(req.body.title!==undefined) task.title=req.body.title;
    res.json(task);
})
// delete
app.patch("/tasks/:id",(req,res)=>{
 tasks=tasks.filter(t=>t.id == req.params.id);
    res.json({message:"Deleted"});
})
