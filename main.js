require("dotenv").config();

const express = require("express");

const mongoose = require("mongoose");

const app = express();

const alltodoRoutes = require("./src/routes/todo");

//connect to mongodb
mongoose
  .connect(`${process.env.MongoDB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected ... my love "))
  .catch((err) => console.log(err));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api", (req, res) => {
  res.send("welcome to my stashbox test api ");
});

app.use("/api/todos", alltodoRoutes);

const port = process.env.PORT || 6969;
app.listen(port, () => {
  console.log(`server is running on port ${port} darling`);
});
