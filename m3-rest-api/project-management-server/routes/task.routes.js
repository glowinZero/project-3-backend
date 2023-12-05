const express = require('express');

const router = express.Router();

const Task = require('../models/Task.model');

router.get("/tasks", (req, res) => {
    Task.find()
      .then((allTasks) => res.json(allTasks))
      .catch((error) => res.json(error));
});

router.get("/tasks/:taskId", (req, res) => {
    const {taskId} = req.params;

    Task.findById(taskId)
      .then((task) => res.json(task))
      .catch((error) => res.json(error));
});

router.put("/tasks/:taskId", (req, res) => {
    const { taskId } = req.params;
    const {title, body, deadline, status, user: userId} = req.body; 
  
    Task.findByIdAndUpdate(taskId, {title, body, deadline, status, user: userId}, { new: true })
      .then(() => {
        res.json({ message: "Task Updated!" });
      })
      .catch(() => {
        res.json({ message: "Failed to Update Task." });
      });
  });

router.post("/task", (req, res) => {
    const {title, body, deadline, status, user: userId} = req.body; 

    Task.create({title, body, deadline, status, user: userId})
      .then((response) => res.json(response))
      .catch((error) => res.json(error));
});

router.delete("/task/:taskId", (req, res) => {
    const {taskId} = req.params;

    Task.findByIdAndDelete(taskId)
        .then(()=>{
            res.json({message: 'Task deleted'});
        })
        .catch(()=>{
            res.json({error: 'Failed to delete a Task'});
        })
});


module.exports = router;