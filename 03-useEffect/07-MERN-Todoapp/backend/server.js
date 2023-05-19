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
app.get('/api/v1/todos', (req, res) => {
  Todo.find()
    .then((result)=>{res.send(result)})
    .catch((err)=>console.log(err))
})

app.get('/api/v1/todos', (req, res) => {
  Todo.find()
    .then((result)=>{res.send(result)})
    .catch((err)=>console.log(err))
})

app.get('/api/v1/todos', (req, res) => {
  Todo.find()
    .then((result)=>{res.send(result)})
    .catch((err)=>console.log(err))
})

app.get('/api/v1/todos', (req, res) => {
  Todo.find()
    .then((result)=>{res.send(result)})
    .catch((err)=>console.log(err))
})

app.get('/api/v1/todos', (req, res) => {
  Todo.find()
    .then((result)=>{res.send(result)})
    .catch((err)=>console.log(err))
})
