const express= require('express');
const app=express();
const mongoose=require('mongoose');
const bodyParser=require('body-parser')
require('dotenv/config');
const cors=require('cors')

//import routes
const postsRoute=require('./routes/posts');

app.use(bodyParser.json());
app.use(cors());
//middleware
app.use('/posts',postsRoute)
// app.use('/posts',()=>{
//     console.log('This is middleware running........');
// });
//routes
app.get('/',(req,res)=>{
    res.send('we are on home');
});



//connect to db
mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser:true},
()=>console.log('connected to database')
);

//listening the server
app.listen(3000);