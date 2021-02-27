const mongoose = require('mongoose')
const schema = mongoose.Schema

const userSchema = new schema({
   name: {
      type: String,
   },
   age: {
      type: Number,
   },
   size: {
      type: String
   }
})

module.exports = mongoose.model('User', userSchema)