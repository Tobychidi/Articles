const express = require('express')
const app = express()
const cors = require('cors');

const shapesRoute = require('./routes/shapes');
const sizesRoute = require('./routes/sizes');

//MIDDLEWARES
app.use(express.json());

app.use(cors());


//ROUTES

app.get('/', (req,res)=>{
   res.send('Welcome to the shapes app. Do something')
})

app.use('/shapes', shapesRoute )

app.use('/sizes', sizesRoute )

app.get('/features', (req,res)=>{
   res.send('This is features')
})



app.listen(3000, ()=>{
   console.log('I am up and running')
})
