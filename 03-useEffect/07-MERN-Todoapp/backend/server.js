const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const Todo = require('./models/todo')
const cors = require('cors')

// middleware
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({origin: 'http://localhost:3001'}))

// mongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => app.listen(3000, () => console.log(`Server is running on Port ${process.env.PORT}`)))
  .catch((err)=>console.log(err))



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
app.patch('/api/v1/todos/:id', (req, res) => {
  const id = req.params.id
  const todoToUpdate = Todo.findById(id)
  if (!todoToUpdate) return res.status(404).send('To do not found...')
  const updates = req.body
  console.log(updates)
  if (updates.hasOwnProperty('completed')) {
    const completeChange = !JSON.parse(updates['completed'])
    console.log(completeChange)
    updates['completed'] = completeChange
    console.log(updates)
  }
  Todo.findByIdAndUpdate(id, updates)
    .then((result) => {
      console.log(result)
      res.send(result)
    })
    .catch((err) => {
      console.log(err)
    })
})

// delete individual instance
app.delete('/api/v1/todos/:id', (req, res) => {
  const id = req.params.id
  console.log(id)
  Todo.findByIdAndDelete(id)
    .then((result) => { res.redirect('/api/v1/todos')})
    .catch((err)=>console.log(err))
})
