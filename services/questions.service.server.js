
const questionsDao = require ('../daos/questions.dao.server')

findAllQuestions = () => questionsDao.findAllQuestions()

findQuestionById = (qid) => questionsDao.findQuestionById(qid)

findQuestionsForQuiz = (qzid) =>questionsDao.findQuestionForQuiz(qzid)
    .then(quiz=>quiz.questions)

module.exports = {
    findAllQuestions,
    findQuestionById,
    findQuestionsForQuiz
}
