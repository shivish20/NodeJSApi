const express=require('express');
const router=express.Router();
const Post=require('../models/Post');

//to get all posts from db
router.get('/',async(req,res)=>{
    // res.send('we are on posts');
    try{
        const posts=await Post.find();
        res.json(posts);
    }catch(err)
    {
        res.json({message:err});
    }
});

//send post to db
router.post('/',async(req,res)=>{
    // console.log(req.body);
    const post=new Post({
        title:req.body.title,
        description:req.body.description
    });
try{
    const savedPost=await post.save();
    res.json(savedPost);
    }catch(err){
        res.json({message:err});
    };
});

//to get perticular post by id
router.get('/:postId',async(req,res)=>{
    try{
   const post= await Post.findById(req.params.postId);
   res.json(post);
    }catch(err){
        res.json({message:err});
    };
})


//delete a post
router.delete('/:postId',async(req,res)=>{
    try{
   const removePost= await Post.remove({_id:req.params.postId});
   res.json(removePost);
    }catch(err){
        res.json({message:err});
    };
})

//update a post
router.patch('/:postId',async(req,res)=>{
    try{
   const updatedPost= await Post.updateOne({_id:req.params.postId},
    {$set:{title:req.body.title}});
   res.json(updatedPost);
    }catch(err){
        res.json({message:err});
    };
})
module.exports=router;