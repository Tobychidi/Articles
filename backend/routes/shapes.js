const router = require('express').Router();
const fs = require('fs');

const shapeList = ['cube', 'cylinder', 'cone', 'sphere']


router.get('/', (req, res) => {
   res.send('Welcome to shapes')
})

router.get('/list', (req, res) => {
   res.send(shapeList)
})

router.post('/add', (req, res) => {
   const payload = req.body
   if (!payload.shape) return res.status(404).send('Shape not found')
   shapeList.push(payload.shape)
   const message = 'Shape added sucessfully'
   res.status(200).send(message)
})

module.exports = router;