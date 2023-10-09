const express = require('express');
const path=require('path');
const bcrypt=require('bcrypt');
const collection=require("./config");
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render("login");
});

app.get("/login",(req,res)=>{
    res.render("login");
});


app.post("/login", async (req, res) => {
    const data = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }

    try {
        const userdata = await collection.create(data);
        console.log(userdata);
        res.redirect("/success"); // Redirect to a different route
    } catch (error) {
        console.error(error);
        res.status(500).send("An error occurred while registering the user.");
    }
});

app.get("/success", (req, res) => {
    res.send("User registered successfully!");
});

// app.js

// app.post("/login", async (req, res) => {
//     const data = {
//         name: req.body.name,
//         email: req.body.email,
//         password: req.body.password
//     }

//     try {
//         const userdata = await collection.create([data]);
//         res.render("home");
//         res.send("User registered successfully!");
//         console.log(userdata);
//     } catch (error) {
//         console.error(error);
//         res.status(500).send("An error occurred while registering the user.");
//     }
// });


// app.post("/login",async (req,res)=>{
//     const data={
//         name: req.body.name,
//         email: req.body.email,
//         password: req.body.password
//     }
//     const userdata=await collection.insertMany([data]);
//     console.log(userdata);
// })
const port=5000;
app.listen(port,()=>{
    console.log("server running on port{5000}");
})