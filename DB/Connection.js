require('dotenv').config()
const mongoose = require('mongoose')


const connectDb = async()=>{
   await mongoose.connect(process.env.URL,{useNewUrlParser:true , useUnifiedTopology:true})
//    const db = mongoose.connection
//    db.on('error',()=>console.log('Database Failed'))
//    db.once('open',()=>console.log('Database connected'))
   console.log('Database connected')
   
}

module.exports = connectDb