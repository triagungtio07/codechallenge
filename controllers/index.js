const usersController = require('./usersController')
const tasksController = require('./tasksController')

class Controller{
    users(){
        return usersController
    }
    tasks(){
        return tasksController
    }
}

module.exports =Object.freeze(new Controller())