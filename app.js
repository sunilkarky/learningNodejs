// this is main file for using every code is done under it.
const express=require("express") //seting up express
const app=express() //storing it in app ,app vmmey variablethrought use garinxa

////set environment for k k chainxa
app.set("view engine","ejs")
app.get('/',(req,res)=>{
    // res.send("<h1>hello world hooo</h1>")//this is for yahi html lekere garnu parda
    res.render("home.ejs") //this is used to render file using ejs
})

//  / ma jada k dekhauney
app.get("/about",(req,res)=>{
    res.send("about Page the is")
})
app.get("/contact",(req,res)=>{
    res.send("contact hoo yoo")
})

app.listen(3000,function(){
    console.log("Nodejs has sarted on port 3000")
})
