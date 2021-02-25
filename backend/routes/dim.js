const router = require('express').Router();
const fs = require('fs');

const data = fs.readFileSync('dataBank/shapes.json')
const shapes = JSON.parse(data);
console.log(shapes)

// const List= ['width', 'height']


router.post('/', (req, res)=>{
   const payload = req.body
   const shape = payload.shape
   shapes[shape].dim = payload.dim
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
   res.status(200).json(payload)
})

module.exports = router;