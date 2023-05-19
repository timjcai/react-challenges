const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const Todo = require('./models/todo')

const app = express();
app.use(express.json())

// mongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => app.listen(3000, () => console.log(`Server is running on Port ${process.env.PORT}`)))
  .catch((err)=>console.log(err))

// middleware

app.use(express.urlencoded({ extended: true }))

// routes
// index
app.get('/api/v1/todos', (req, res) => {
  Todo.find()
    .then((result)=>{res.send(result)})
    .catch((err)=>console.log(err))
})

// create
app.post('/api/v1/todos', (req, res) => {
  const data = req.body
  const todo = new Todo(data)
  console.log(todo)

  todo
    .save()
    .then((result) => {
      res.redirect('/api/v1/todos')
    })
    .catch((err)=>console.log(err))
})

// show individual todo
app.get('/api/v1/todos/:id', (req, res) => {
  const id = req.params.id
  Todo.findById(id)
    .then((result)=>{res.send(result)})
    .catch((err)=>console.log(err))
})

// update individual todo
app.get('/api/v1/todos', (req, res) => {
  Todo.find()
    .then((result)=>{res.send(result)})
    .catch((err)=>console.log(err))
})

// delete individual instance
app.get('/api/v1/todos', (req, res) => {
  Todo.find()
    .then((result)=>{res.send(result)})
    .catch((err)=>console.log(err))
})
