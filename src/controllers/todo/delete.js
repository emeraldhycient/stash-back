const todo = require("../../models/todo");

const deleteTodo = (req, res) => {
  const { id } = req.params;
  if (id) {
    todo
      .findById(req.params.id)
      .then((todo) => {
        todo.remove().then(() => {
          return res
            .status(200)
            .json({ status: "success", message: "Todo deleted" });
        });
      })
      .catch((err) => {
        return res
          .status(500)
          .json({ status: "failed", message: "unable to delete to do" });
      });
  } else {
    return res.status(422).json({
      status: "failed",
      message: "please provide an id",
    });
  }
};
module.exports = deleteTodo;
