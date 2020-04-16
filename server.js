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
mongoose.connect("mongodb://heroku_wtlbsg56:lo3e688p0hdjlcof2nmuugl4ar@ds051605.mlab.com:51605/heroku_wtlbsg56",
    { useNewUrlParser: true, useUnifiedTopology: true })


var session = require('express-session')
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'any string'
}));


require('./controllers/quizzes.controller.server')(app)
require('./controllers/questions.controller.server')(app)
require('./controllers/users.controller.server')(app)
require('./controllers/session.controller.server')(app)

app.get('/hello', (req, res) => res.send('hello world!'))


// Allows the app to actively listen
app.listen(process.env.PORT || 3000)
