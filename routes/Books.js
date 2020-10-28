const router =require('express').Router()
const mongoose = require('mongoose')
const Books =require('../models/Books')

//get all books in the database
router.get('/', async(req,res)=>{
    try{
        const books = await Books.find()
        res.json(books)
    }catch (error){
        res.status(500).json({message: error})
    }
})

//get a particular book with a specific id

router.get('/:id', async (req,res)=>{
    try{
        const book =  await Books.findById(req.params.id)
        if(book)
        res.json(book)
   }
   catch(error){
        res.status(404).send("Book not found")
   }
})

router.post('/',async(req,res)=>{
   // const {title,author,numberOfPages,category} = req.body
    res.send(req.body)
    // let newBook ={}
    // newBook.title =title
    // newBook.author=author
    // newBook.numberOfPages=numberOfPages
    // newBook.category=category
    // newBook.rating=0
    // newBook.id=id

//     let createdBook = new Books(newBook)
//   await  createdBook.save()
//   res.json(createdBook)

    
})

module.exports =router