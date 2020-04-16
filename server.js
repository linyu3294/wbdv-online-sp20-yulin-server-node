// Set Up Express and Mongo
const mongoose = require("mongoose")
const express = require ("express")
const app = express()


//Configuring some parameters to specify how the express app will listen to any request
app.use(function(req, res, next) {
    // res.header("Access-Control-Allow-Origin",
    //     "http://localhost:4200")
    res.header("Access-Control-Allow-Origin",
        "https://wbdv-o-sp20-yulin-client-ng.herokuapp.com")
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept")
    res.header("Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS")
    res.header("Access-Control-Allow-Credentials", "true")
    next()
});


// var connectionString = 'mongodb://127.0.0.1:27017/whiteboard-cs5610-o-ylin-db';
// if(process.env.MLAB_USERNAME_WEBDEV) {
//     var username = process.env.MLAB_USERNAME_WEBDEV;
//     var password = process.env.MLAB_PASSWORD_WEBDEV;
//     connectionString = 'mongodb://' + username + ':' + password;
//     connectionString += '@ds051605.mlab.com:51605/heroku_wtlbsg56';
// }
//
// mongoose.connect(connectionString,
//     { useNewUrlParser: true, useUnifiedTopology: true })

// mongoose.connect("mongodb://heroku_wtlbsg56:lo3e688p0hdjlcof2nmuugl4ar@ds051605.mlab.com:51605/heroku_wtlbsg56",
//     { useNewUrlParser: true, useUnifiedTopology: true })

//Configuring some parameters to specify how the express app will parse the body
// const bodyparser = require('body-parser')
// app.use(bodyparser.urlencoded({extended: false}))
// app.use(bodyparser.json)


// var session = require('express-session')
// app.use(session({
//     resave: false,
//     saveUninitialized: true,
//     secret: 'any string'
// }));

require('./controllers/quizzes.controller.server')(app)
require('./controllers/questions.controller.server')(app)
require('./controllers/users.controller.server')(app)
require('./controllers/session.controller.server')(app)

app.get('/hello', (req, res) => res.send('hello world!'))

app.listen(process.env.PORT || 3000)

h
