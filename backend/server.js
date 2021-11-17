//import express module
//express module used to devlop the rest api's
const express = require("express");

//import cors module
//cors module used to enable the cors policy
const cors = require("cors");

//import mongoose module 
//mongoose module used to connect to the mongodb database 
const mongoose = require("mongoose");


//import express_async_handler

const express_async_handler = require("express-async-handler");



//import model
const Product = require("./model/product");

// create the rest object
const app = express();
//where "app" is the rest object
//where "app" object used to devlope the rest api's  GET, POST, PUT, DELETE,......

//enable the cors policy
app.use(cors());

//set the json as MIME type
app.use(express.json());


//connect to mongoDB database
mongoose.connect("mongodb+srv://admin-1234:admin-1234@usercluster.ygl3d.mongodb.net/e-commerce?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
});

 //create the rest api 
app.get("/api/products", express_async_handler(async (req,res)=>{
    const product = await Product.find();
    if(!product){
        res.status(400).send({"message":"Products not available"});
    }else{
        res.status(200).send(product);
    }
}));

//create rest api by using id 
app.get("/api/products/:id",express_async_handler(async (req,res)=>{
    const product = await Product.findOne(mongoose.Types.ObjectId(req.params.id));
    if(!product){
        res.status(400).send({"message":"Product not available"});
    }else{
        res.status(200).send(product);
    }
}));



app.listen(8080,()=>{
    console.log("server listing the port no 8080 ");
});