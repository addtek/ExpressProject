const mongoose =require('mongoose')

const authorsSchema = new mongoose.Schema({
  

    author:{
        type: String,
        required:true
    },

   bookTitle:{
        type :String ,
        required:true
    }

   


})

module.exports = mongoose.model('author', authorsSchema)