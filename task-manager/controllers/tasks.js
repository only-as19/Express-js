const Task = require("../models/task");
const {createCustomError} = require("../models/task");


const AsyncWrapper = require("../middlewares/async-wrapper");
const getAllTasks = AsyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});

const createTask = AsyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(200).json({ task });
});

const getTask = AsyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });
  res.status(200).json({ task });
  if (!task) {
    createCustomError(`No task found with id ${task}`,404)
  }
});

const deleteTask = AsyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskID });
  res.status(200).json({ task });
  if (!task) {
    return res.status(404).json(`No task found with id ${task}`);
  }
});

const updateTask = AsyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return res.status(404).json(`No task found with id ${task}`);
  }
  res.status(200).json({ task });
});

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
