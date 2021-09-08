const express = require("express");
const app = express();
const todoRouter = require("./routers/todoRouter");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/todo", todoRouter);

app.use((err, req, res, next) => {
  res.json({ msg: "Something Wrong", err });
});

app.listen(8080, () => console.log("Server run on 8080..."));
