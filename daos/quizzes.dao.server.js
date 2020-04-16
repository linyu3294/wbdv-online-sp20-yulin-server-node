const quizzesModel = require('../models/quizzes/quizzes.model.server')

const findAllQuizzes = () => quizzesModel.find().populate('questions')

const findQuizById = (qid) => quizzesModel.findById(qid).populate('questions')

const createQuiz = (quiz) => quizzesModel.create(quiz)

module.exports = {
    findAllQuizzes, findQuizById, createQuiz
}
