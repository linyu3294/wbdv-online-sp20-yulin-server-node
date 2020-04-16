// Set Up Express and Mongo
const express = require ("express")
const app = express()

//Configuring some parameters to specify how the express app will listen to any request
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin",
        "http://localhost:4200")

    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept")
    res.header("Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS")
    res.header("Access-Control-Allow-Credentials", "true")
    next()
});

// Configuring some parameters to specify how the express app will parse the body
// app.use(bodyparser.urlencoded({extended: false}))
// app.use(bodyparser.json)
const pretty = require('express-prettify')
app.use(pretty({ query: 'pretty' }))
const bodyparser = require('body-parser')

const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/whiteboard-cs5610-o-ylin-db",{ useNewUrlParser: true })



// setting up the quizzes server (listens to the endpoints and directs any request to quiz service)
require("./_controllers/quizzes.contoller.server")(app)
//Create mongoose schema for quizzes
const quizzesSchema = mongoose.Schema({
    title: String
}, {collection: 'quizzes'})
// const quizModel
const quizzesModel = mongoose.model("quizzesModel", quizzesSchema)
quizzesModel.find().then (allQuizzes=>console.log(allQuizzes))


// Setting up server controllers to express app
require("./_controllers/questions.controller.server")(app)



// A test for starting the server
app.get('/hello', (request, response)=>response.send("Hello World"))

// Allows the app to actively listen
app.listen(process.env.PORT || 3000)
