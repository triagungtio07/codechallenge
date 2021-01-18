const router = require('express').Router();
const controller = require('../controllers')

// // Routing Users
// // Create users
router.post("/users", controller.users().post);
// // Read users
router.get("/users", controller.users().get );
// // Update users
router.put("/users", controller.users().put );
// // Delete users
router.delete("/users", controller.users().delete );

// // Routing tasks
// // Create tasks
router.post("/tasks", controller.tasks().post );
// // Read tasks
router.get("/tasks", controller.tasks().get );
// // Update tasks
router.put("/tasks", controller.tasks().put );
// // Delete users
router.delete("/tasks", controller.tasks().delete );


module.exports = router


