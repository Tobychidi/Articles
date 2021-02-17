const express = require('express')

const app = express()
const cors = require('cors');

const articles = []

app.use(cors());


app.get('/', (req,res)=>{
   res.send('Welcome to my App')
   console.log(req)
})

app.listen(3000, ()=>{
   console.log('I am up and running')
})
