const express = require('express');
const mongoose = require("mongoose");

const router = express.Router();

const Task = require('../models/Task.model');

router.get("/tasks/:userId", (req, res)=>{
  const {userId} = req.params;
  Task.find({ user: userId })
  .then((tasks) => {
    res.json(tasks);
  })
  .catch((error) => {
    console.error("Error fetching tasks:", error);
    res.status(500).json({ message: "Internal Server Error" });
  });
})

router.get("/tasks", (req, res) => {
    Task.find()
      .then((allTasks) => res.json(allTasks))
      .catch((error) => res.json(error));
});


router.put("/tasks/:taskId", (req, res) => {
    const { taskId } = req.params;
    const {title, deadline, status, user: userId} = req.body; 
  
    Task.findByIdAndUpdate(taskId, {title, deadline, status, user: userId}, { new: true })
      .then(() => {
        res.json({ message: "Task Updated!" });
      })
      .catch(() => {
        res.json({ message: "Failed to Update Task." });
      });
  });

router.post("/task", (req, res) => {
    const {title, deadline, status, user: userId} = req.body; 

    Task.create({title, deadline, status, user: userId})
      .then((response) => res.json(response))
      .catch((error) => res.json(error));
});

router.delete("/tasks/:taskId", (req, res) => {
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