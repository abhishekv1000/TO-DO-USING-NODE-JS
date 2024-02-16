const express = require("express");
const bodyParser = require("body-parser");
const ejs = require('ejs');

const app = express()

// ...................................................

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("Public"))
app.set('view engine', 'ejs');

// .................................................

var myitem = ["wake up"]

app.get('/' ,function(req,res){
     
   var today = new Date()
   
   var options = {
    weeksday :"long",
    month :"long",
    day : "numeric"
   }

   var mydate =today.toLocaleDateString("en-us" , options)

   res.render("Todo" , { live :mydate , item : myitem})
    // res.sendFile(__dirname + '/Todo.html')
})


app.post('/' , function(req,res){
    var text = req.body.text
    myitem.push(text)
    res.redirect('/')  
   console.log(myitem);
})

app.listen(3000,function(req,res){
   
    console.log("Server Is Running On Server 3000")
})