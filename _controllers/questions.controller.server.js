module.exports = app => {

    const questionsServices = require('../_services/questions.service.server')

    app.get('/api/questions/:questionId',
        (request, response) =>
        response.json(questionsServices
            .findQuestionById(request.params['questionId']))
    )

    app.get('/api/questions', (request, response) =>
        response.json(questionsServices
            .findAllQuestions())
    )

    app.get('/api/quizzes/:quizId/questions' , (request, response) =>

        response.json(questionsServices
            .findQuestionsForQuiz(request.params['quizId'])) )
}
