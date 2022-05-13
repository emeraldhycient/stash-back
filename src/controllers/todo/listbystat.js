const todo = require("../../models/todo");

const listtodobystat = (req, res) => {
  const { status } = req.params;
  if (status === "all") {
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
  }

  todo
    .find({ status: req.params.status })
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

module.exports = listtodobycat;
