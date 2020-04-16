const questionModel = require('../models/questions/questions.model.server')
const quizzesModel = require('../models/quizzes/quizzes.model.server')

const findAllQuestions= () => questionModel.find()

const findQuestionById = (qid) => questionModel.findById(qid)


const findQuestionsForQuiz =(quizId) =>
    quizzesModel.findById(quizId)
                        .populate('questions')
                        .then(quiz=>quiz.questions)

module.exports = {
    findAllQuestions, findQuestionById, findQuestionsForQuiz
}
