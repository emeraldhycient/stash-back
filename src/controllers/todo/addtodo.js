const todo = require("../../models/todo");

const addTodo = (req, res) => {
  const { title, description, status, category } = req.body;

  if (!title || !description || !status || !category) {
    return res.status(404).json({ notfound: "No todos found" });
  } else {
    const newTodo = new todo({
      title: title,
      description: description,
      status: status,
    });
    newTodo
      .save()
      .then((todo) => {
        res
          .status(200)
          .json({ status: "success", message: "todo added", todo: todo });
      })
      .catch((err) => {
        res
          .status(422)
          .json({ status: "failed", message: "pls enter all the fields" });
      });
  }
};
module.exports = addTodo;
