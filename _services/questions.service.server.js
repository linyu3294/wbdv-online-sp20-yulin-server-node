
const questions = require('./__questions')

findAllQuestions = () => questions

findQuestionsById = (questionId) => questions.find(
    question => question._id === questionId)


findQuestionsForQuiz = (quizId) => questions.filter(
    question => question.quizId === quizId
)

module.exports = {
    findAllQuestions: findAllQuestions,
    findQuestionById: findQuestionsById,
    findQuestionsForQuiz: findQuestionsForQuiz
}
