const express =require('express')
const app = express()
const connectDb = require('./DB/Connection')

const port = 3000

connectDb()
app.use('/books',require('./routes/Books'))
app.listen(port, ()=>{
    console.log('Appliication started')
})