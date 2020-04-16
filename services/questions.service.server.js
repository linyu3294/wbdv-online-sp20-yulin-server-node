
const questionsDao = require ('../daos/questions.dao.server')

findAllQuestions = () => questionsDao.findAllQuestions()

findQuestionById = (qid) => questionsDao.findQuestionById(qid)

findQuestionsForQuiz = (qzid) =>questionsDao.findQuestionsForQuiz(qzid)
    .then(questions=>questions)

module.exports = {
    findAllQuestions,
    findQuestionById,
    findQuestionsForQuiz
}
