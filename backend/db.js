const mongoose = require("mobgoose");

mongoose.connect("mongodb+srv://kirags123:8qPEaBKTKBEh2bss@cluster0.f3qlbuo.mongodb.net/todos")
const todoSchema = mongoose.Schema({
  title:String,
  description: String ,
  completed: boolean
})

const todo = mongoose.model('todos' , todoSchema);
module.exports = {
  todo
}