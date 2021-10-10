const dotenv=require('dotenv');
const mongoose=require('mongoose');
const express=require('express');
const slq=require('mssql/msnodesqlv8');
const app=express();

dotenv.config({path: './config.env'})
const port=process.env.PORT;

// require('./db/conn');

// const DB=process.env.CON;
CON={
    user:'Yadav',
    password:'Node',
    server:'DESKTOP-FLVTAMD\\SQLEXPRESS',
    database:'Yadav',
    driver:'msnodesqlv8',
    options:{
        trustedConnection:true
    }
}


// slq.connect(DB).then(()=>{
//     console.log("connection successfull");
// }).catch((err)=>console.log(err));

slq.connect(CON,function(err,res){
    if(err){
        console.log(err);
    }else{
        console.log("connection success");
    }
})
//Middleware

const middleware=(req,res,next)=>{
console.log("hello this is middleware");
next();
};

app.get('/',(req,res)=>{
res.send(`Hello world from the server`);
});


app.get('/about',middleware,(req,res)=>{
    console.log("hello about");
res.send("This is About Page send By server");
});

app.get('/contact',(req,res)=>{
    res.send("This is Contact Page send By server");
    });
    
    app.get('/signin',(req,res)=>{
        res.send("This is Login Page send By server");
        });
    
        app.get('/signup',(req,res)=>{
            res.send("This is Registeration Page send By server");
            });
            

app.listen(port,()=>{
    console.log(`server is running at the port number ${port}`);
});