const mongoose = require('mongoose')
const quizzesSchema = mongoose.Schema({
    _id : String,
    title: String,
    questions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'QuestionModel'
    }]
}, {collection: 'quizzes'})
module.exports = quizzesSchema
