const questionsService = require('../services/questions.service.server')

module.exports = function (app) {

    app.get("/api/quizzes/:qzid/questions", (req, res) =>
      questionsService.findQuestionsForQuiz(req.params['qzid'])
            .then(questions => res.json(questions)))

    app.get("/api/questions", (req, res) =>
            questionsService.findAllQuestions()
            .then(allQuizzes => res.json(allQuizzes)))

}
