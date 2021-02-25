const express = require('express')
const app = express()
const cors = require('cors');

const shapesRoute = require('./routes/shapes');
const dimRoute = require('./routes/dim');

//MIDDLEWARES
app.use(express.json());
app.use(cors());


//ROUTES

app.get('/', (req,res)=>{
   res.send('Welcome to the shapes app. Do something')
})

app.use('/shapes', shapesRoute )

app.use('/dim', dimRoute )

app.get('/features', (req,res)=>{
   res.send('This is features')
})



app.listen(3000, ()=>{
   console.log('I am up and running')
})
