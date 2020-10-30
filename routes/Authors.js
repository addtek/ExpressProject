const router =require('express').Router()
const mongoose = require('mongoose')
const Authors =require('../models/Authors')


//get all authors in the database
router.get('/', async(req,res)=>{
    try{
        const authors = await Authors.find()
        res.json(authors)
    }catch (error){
        console.log(error);
        res.status(500).json({message: error})
    }
})

//get a particular author with a specific id

router.get('/:id', async (req,res)=>{
    try{
        const author =  await Authors.findById(req.params.id)
        if(author)
        res.json(author)
   }
   catch(error){
        res.status(404).send("Author is not found")
   }
})

// create a new author

router.post('/',async(req,res)=>{
    const {author,bookTitle} = req.body
    try{
    let newAuthor =  await Authors.create({author,bookTitle})
    res.status(201).json({newAuthor})
    } catch(err){
        res.status(400).send(err)
    }
   
 
     
 })

 router.delete('/:authorId',async(req,res)=>{
    try{
        const author =  await Authors.findOneAndRemove(req.params.id)
       if(author){
        
           res.send('Deleted successfully')
       }
      
       
   }
   catch(error){
        res.status(404).send("Cannot delete book")
   }
})


module.exports=router