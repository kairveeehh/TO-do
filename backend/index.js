const express = require("express");
const { createTodo, updateTodo } = require("./types");
const app = express();



app.use(express.json());
app.post("/todos" , function(req , res){
  const createPayLoad = req.body;
  const parsedPayLoad = createTodo.safeParse(createPayLoad);
  if(!parsedPayLoad.success){
    res.status(411).json({
      msg:"Dhang se bhej be saale",
    })
    return;
  }

  //putin mongo db
  todo.create({
    title: createPayLoad.title ,
    description: createPayLoad.description,
    completed: false
  })

})

app.get("/todos" , async  function(req , res){
const todos = await todo.find({});
res.json({
  todos
})
})

app.put("completed", async function(req , res){
const updatePayLoad = req.body;
const parsedPayLoad = updateTodo.safeParse(updatePayLoad);
if(!parsedPayLoad.success){
  res.status(411).json({
    msg:"Dhang se bhej be saale",
  })
  return;
}
await todo.update({
  _id: req.body.id} , {
    completed: true
  })
  res.json({
    msg:"kaam khatam"
  })
})



