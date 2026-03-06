//creating the server folder
//ejs :embedded java script we have to install

//import { name } from "ejs"

import express from "express"//imports all the package modules present in node_modules
import session from "express-session"
import expressLayouts from "express-ejs-layouts"
const app= express() // we calling the function
app.use(expressLayouts)
app.use(express.static("public"))
app.set("layout","layout")
app.set("view engine","ejs") // view engine using ejs
app.set("views","views")// views in views folder
app.listen(5000,()=> console.log("server started"))// listen is method in express which creates the server and runs on localhost port 8080
// to stop server type ctrl+c to stop server
app.use(express.urlencoded({extended:true}));
app.use(
    session({
        secret:"mySecreteKey",//recommended to store in env file
        resave:false,
        saveUninitialized:false,
    }),
);


let users=[
    { name:"Poojitha",email:"poojitha@gmail.com",password:"1234"},
     {name:"Ajay",email:"ajay@gmail.com",password:"1234"},
    {name:"Komal",email:"komal@gmail.com",password:"1234"}
];




//login page
app.get("/login", (req, res) => {
  res.render("login", { error: null });
});

//  to perform action after clicking on login button
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find((user) => user.email === email);
  if (user) {
    if (user.password === password) {
        req.session.user=user;// session id gets created,check in browser ,insepct-aplication-cookies
      res.redirect("/");
    } else {
      res.render("login", { error: "Invalid Password" });
    }
  } else {
    res.render("login", { error: "User not found" });
  }
  // res.redirect("/");
});
//register page
app.get("/register",(req,res)=>{
    res.render("register")
});

//post when click on register button
app.post("/register", (req, res) => {
  users = [...users, req.body];
  res.redirect("/");
});

//(/login) and (/register) are two routes

//3rd render
app.get("/",(req,res)=>{
    if(req.session.user){
    res.render("dashboard",{users});
    }
    else{
        res.redirect("/login")
    }
});