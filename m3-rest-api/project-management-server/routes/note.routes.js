const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();

const Note = require("../models/Note.model");

router.get("/notes", (req, res) => {
  Note.find()
      .then((allNotes) => res.json(allNotes))
      .catch((error) => res.json(error));
});

router.get("/notes/:noteId", (req, res) => {
    const {noteId} = req.params;

    Note.findById(noteId)
      .then((note) => res.json(note))
      .catch((error) => res.json(error));
});

router.put("/notes/:noteId", (req, res) => {
    const { noteId } = req.params;
    const {title, body, date, user: userId} = req.body; 
  
    Note.findByIdAndUpdate(noteId, {title, body, date, user: userId}, { new: true })
      .then(() => {
        res.json({ message: "Note Updated!" });
      })
      .catch(() => {
        res.json({ message: "Failed to Update Note." });
      });
});

router.post("/note", (req, res) => {
  const {title, body, date, user: userId} = req.body; 

    Note.create({title, body, date, user: userId})
      .then((response) => res.json(response))
      .catch((error) => res.json(error));
});

router.delete("/notes/:noteId", (req, res) => {
    const {noteId} = req.params;

    Note.findByIdAndDelete(noteId)
        .then(()=>{
            res.json({message: 'Note deleted'});
        })
        .catch(()=>{
            res.json({error: 'Failed to delete a Note'});
        })
});

module.exports = router;
