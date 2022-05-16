const express = require("express");
const router = express.Router();
const todoController = require("../../controllers/todo/index");

//list all todos
router.get("/", todoController.alltodo);

//list all todos by status
router.get("/:status", todoController.listtodobystat);

// update  to do
router.post("/update/:id", todoController.updatetodo);

// add new to do
router.post("/create", todoController.addtodo);

//delete todo
router.get("/delete/:id", todoController.deletetodo);

module.exports = router;
