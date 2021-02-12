const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
const data = {
   'name': 'Kachi',
   'age': '24',
   'weight': '50g',
   'school': 'Devamplify',
   'Class': 'JS3',
   'language': 'Igbo',
   'height': ' 2ft'
}

app.get('/', function (req, res) {
   res.send(data);
});

app.get('/happinness', function (req, res) {
   res.send('<b>My</b> first Hapinness server');
});



app.listen(3000, () => {
   console.log('Server is up and running')
})