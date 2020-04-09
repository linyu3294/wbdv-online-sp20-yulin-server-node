module.exports = app => {

const quizzesServices = require('../_services/quizzes.service.server')

    app.get('/api/quizzes/:quizId',
        (request, response) =>
           response.json(quizzesServices
                   .findQuizzesById(request.params['quizId']))
    )

    app.get('/api/quizzes',
        (request, response) =>
            response.json(
                    quizzesServices.findAllQuizzes())
    )
}
