
const quizzes = require('./quizzes')

findAllQuizzes = () => quizzes

findQuizzesById = (quizId) => quizzes.find(
    quiz => quiz._id === quizId)


module.exports = {
    findAllQuizzes : findAllQuizzes,
    findQuizzesById: findQuizzesById
}
