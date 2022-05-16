const todo = require("../../models/todo/todo");

const addTodo = (req, res) => {
  const { title, description, status } = req.body;

  if (!title || !description || !status) {
    return res.status(404).json({ notfound: "pls enter all todos" });
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
        res.status(422).json({
          status: "failed",
          message: "internal serve error",
          todo: {
            title: title,
            description: description,
            status: status,
          },
        });
      });
  }
};
module.exports = addTodo;
