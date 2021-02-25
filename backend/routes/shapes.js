const router = require('express').Router();
const fs = require('fs');

const data = fs.readFileSync('dataBank/shapes.json')
const shapes = JSON.parse(data);
console.log(shapes)
// const shapeList = ['cube', 'cylinder', 'cone', 'sphere']


router.get('/', (req, res) => {
   res.send('Welcome to shapes')
})

router.get('/list', (req, res) => {
   res.send(shapes)
})

router.post('/add', (req, res) => {
   const payload = req.body

   if (!payload.shape && payload.shape == "") return res.status(400).send('Shape not found')

   const newShape = payload.shape

   if (shapes[newShape]) return res.status(400).send('Shape already exists')

   shapes[newShape] = {}//Added new shape to shapes

   const newData = JSON.stringify(shapes, null, 3)

   try {
      fs.writeFile('dataBank/shapes.json', newData, (err) => {
         if (err) throw err;
         console.log('The file has been saved!');
      });
   } catch (error) {
      console.log(error)
      return res.status(500).send('Something bad happened')
   }

   const reply = {
      shape: newShape,
      message: 'Success',
   }
   res.status(200).json(reply)
})

module.exports = router;