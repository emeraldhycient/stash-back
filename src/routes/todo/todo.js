const express = require("express");
const router = express.Router();

//list all todos
router.get("/", (req, res) => {
  res.send("welcome to my stashbox test api ");
});

//list all todos by status
router.get("/:status", (req, res) => {
  res.send("welcome to my stashbox test api ");
});

// update  to do
router.post("/id:", (req, res) => {
  res.send("welcome to my stashbox test api ");
});

// add new to do
router.post("/create", (req, res) => {
  res.send("welcome to my stashbox test api ");
});

//delete todo
router.get("/:id", (req, res) => {
  res.send("welcome to my stashbox test api ");
});
