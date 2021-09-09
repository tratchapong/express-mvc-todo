const path = require('path')
const {v4:uuid} = require('uuid')
const {readFileJSON, writeFileJSON} = require("../helper")

const dbs = 'dbs/todo.json'

class todoModel {
  constructor(list, status) {
    this.list = list
    this.status= status
  }

  static findAll = async () => {
    let data = await readFileJSON(dbs)
    return data
  }

  static findOne = async (id) => {
    let data = await readFileJSON(dbs)
    return data.find(x => x.id === id)
  }

  static remove = async (id) => {
    let data = await readFileJSON(dbs)
    let del_id = data.findIndex(x=> x.id === id)
    let delItem = data.splice(del_id,1)
    await writeFileJSON(dbs, data)
    return delItem
  }

  static add = async (input) => {
    let {list, dueDate} = input
    let data = await readFileJSON(dbs)
    let newTodo = {id: uuid(), list,dueDate, status: false}
    data.push(newTodo)
    await writeFileJSON(dbs, data)
    return newTodo
  }
  
  static replace = async (item) => {
    let data = await readFileJSON(dbs)
    let r_id = data.findIndex(x=> item.id === x.id)
    data[r_id] = {...item}
    await writeFileJSON(dbs, data)
    return data[r_id]
  }
}

module.exports = todoModel