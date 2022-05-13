const todo = require("../../models/todo");

const alltodo = (req, res) => {
  todo
    .find({})
    .then((todos) => {
      return res.status(200).json({
        status: "success",
        message: "All todos",
        todos: todos,
      });
    })
    .catch((err) => {
      return res.status(404).json({
        status: "error",
        message: "No todos found",
        n,
      });
    });
};

module.exports = alltodo;
