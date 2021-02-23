const router = require('express').Router();

const shapeList= ['cube', 'cylinder', 'cone', 'sphere']

router.get('/', (req, res)=>{
   res.send('Welcome to shapes')
})

router.get('/list', (req, res)=>{
   res.send(shapeList)
})

router.post('/add', (req, res)=>{
   console.log(req.body);
})

module.exports = router;