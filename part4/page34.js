//creating the server folder
//ejs :embedded java script we have to install

import express from "express"//imports all the package modules present in node_modules
const app= express() // we calling the function
app.set("view engine","ejs") // view engine using ejs
app.set("views","views")// views in views folder
app.listen(8080,()=> console.log("server started"))// listen is method in express which creates the server and runs on localhost port 8080
// to stop server type ctrl+c to stop server
app.get("/login",(req,res)=>{
    res.render("login")
});

app.get("/register",(req,res)=>{
    res.render("register")
});