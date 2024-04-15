const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");
const encoder = bodyParser.urlencoded();

const app = expree();

const connection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "logindb"
})

//connect to the database.
connection.connect(function(error){
    if(error) throw error
    else console.log("connected to the database succesfully")
})


app.get("/",function(req,res){
    res.sendFile(__dirname+"/login.html")
})

app.post("/",encoder,function(req,res){
    var username = req.body.email;
    var password = req.body.password;

    connection.query("select * from logininfo where Email=? and Password = ?",[email,password],function(error,results,fields){
        if(results.length>0){
            res.redirect("/index.html");
        }
        else{
            res.redirect("/");
        }
    })
})


//when login is success.
app.get("/index",function(req,res){
    res.sendFile(__dirname + "/index.html")
})

//set app port.
app.listen(4500);