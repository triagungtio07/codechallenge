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
router.post("/tasks", controller.task().post );
// // Read tasks
router.get("/tasks", controller.task().get );
// // Update tasks
router.put("/tasks", controller.task().put );
// // Delete users
router.delete("/tasks", controller.task().delete );


module.exports = router


