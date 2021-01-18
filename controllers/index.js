const usersController = require('./usersController')
const tasksController = require('./tasksController')

class Controller{
    users(){
        return usersController
    }
    task(){
        return tasksController
    }
}

module.exports =Object.freeze(new Controller())