const router = require('express').Router();

const List= ['width', 'height']

router.get('/', (req, res)=>{
   res.send('Welcome to sizes')
})

router.get('/list', (req, res)=>{
   res.send(List)
})

// router.post('/add')

module.exports = router;