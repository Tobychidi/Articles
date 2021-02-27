const express = require('express')
const app = express()
const cors = require('cors');
const mongoose = require('mongoose')


const usersRoute = require('./routes/user');
const shapesRoute = require('./routes/shapes');
const dimRoute = require('./routes/dim');


mongoose.connect('mongodb+srv://TobyChidi:15987PIn\.@cluster0.km7jl.mongodb.net/Users?retryWrites=true&w=majority',
   { useNewUrlParser: true, useUnifiedTopology: true },(err) => {
      if(err) return console.log(err)
      console.log('Connected to DB')
   });


//MIDDLEWARES
app.use(express.json());
app.use(cors());


//ROUTES

app.get('/', (req, res) => {
   res.send('Welcome to the shapes app. Do something')
})

app.use('/user', usersRoute)

app.use('/shapes', shapesRoute)

app.use('/dim', dimRoute)

app.get('/features', (req, res) => {
   res.send('This is features')
})



app.listen(3000, () => {
   console.log('I am up and running')
})
