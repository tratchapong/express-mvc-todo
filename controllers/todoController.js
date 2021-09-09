const path = require("path");
const todoModel = require("../models/todoModel");

exports.getAll = async (req, res, next) => {
  let todo = await todoModel.findAll();
  let all = todo.length;
  let done = todo.filter((x) => x.status).length;
  let undone = todo.filter((x) => !x.status).length;
  res.render("index", { all, done, undone });
};

exports.getIndex = async (req, res, next) => {
  let { id } = req.params;
  let result = await todoModel.findOne(id);
  console.log(result);
  res.render("todoform", { todo: [result] });
};

exports.delete = async (req, res, next) => {
  let { id } = req.params;
  let result = await todoModel.remove(id);
  console.log(result);
  let todo = await todoModel.findAll();
  res.render("todoform", { todo });
};

exports.addForm = async (req, res, next) => {
  let todo = await todoModel.findAll();
  res.render("todoform", { todo });
};

exports.add = async (req, res, next) => {
  let input = req.body;
  let result = await todoModel.add(input);
  console.log(result);
  let todo = await todoModel.findAll();
  res.render("todoform", { todo });
};

exports.editForm = async (req, res, next) => {
  let { id } = req.params;
  let editItem = await todoModel.findOne(id);
  res.render("editform", { editItem });
};

exports.saveEdit = async (req, res, next) => {
  let body = req.body;
  let saveItem = {
    id: body.id,
    list: body.list,
    dueDate: body.dueDate,
    status: body.status ? true : false,
  };
  let result = await todoModel.replace(saveItem);
  let todo = await todoModel.findAll();
  res.render("todoform", { todo });
};
