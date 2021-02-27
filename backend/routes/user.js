const router = require('express').Router();

const User = require('./../model/User');

router.post('/', async (req,res)=>{
   const payload = req.body

   const user = new User({
      name: payload.name,
      age: payload.age,
      size: payload.size
   })
   try {
      const savedUser = await user.save();
      res.send("User has been saved");
   } catch (err) {
      res.status(400).send(err);
   }
})

module.exports = router;