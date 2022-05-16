const todo = require("../../models/todo/todo");

const updatetodo = (req, res) => {
  const { id } = req.params;
  const { title, description, status } = req.body;

  if (!title || !description || !status) {
    return res
      .status(422)
      .json({ status: "failed", message: "pls enter all the fields" });
  } else {
    todo
      .findById(id)
      .then((todo) => {
        todo.title = title;
        todo.description = description;
        todo.status = status;
        todo
          .save()
          .then(() => {
            return res.status(200).json({
              status: "failed",
              message: "todo updated successfully",
              todos: todo,
            });
          })
          .catch((err) => {
            return res
              .status(500)
              .json({ status: "failed", message: "unable to update todo" });
          });
      })
      .catch((err) => {
        return res
          .status(404)
          .json({ status: "failed", message: "todo not found" });
      });
  }
};

module.exports = updatetodo;
