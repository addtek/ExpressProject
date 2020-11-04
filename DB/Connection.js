require('dotenv').config()
const mongoose = require('mongoose')


const connectDb = async()=>{
   await mongoose.connect(process.env.URL,{useNewUrlParser:true , useUnifiedTopology:true})

   console.log('Database connected')
   
}

module.exports = connectDb