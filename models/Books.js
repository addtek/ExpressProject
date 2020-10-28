const mongoose =require('mongoose')

const booksSchema = new mongoose.Schema({
    title:{
        type : String
    },

    author:{
        type: String
    },

    numberOfPages:{
        type : Number
    },

    category:{
        type : String
    },
    rating:{
        type: Number
    },
    id:{
        type:Number
    }


})

module.exports =mongoose.model('Books', booksSchema)