const express = require("express");
const router = express.Router();
const Notes = require("../models/Notes");
const fetchuser = require("../middleware/fetchuser");
const { body, validationResult } = require("express-validator");
const { route } = require("./auth");
//Route 1 : fething notes of logged in Users
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Notes.find({ user: req.user.id });

    res.json(notes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("some error occoured");
  }
});
//Route 2 : adding notes in the data base. Login Requried;
router.get(
  "/addnotes",
  fetchuser,
  [
    body("title", "Title can't be empty").isLength({ min: 3 }),
    body("description", "Discription cant be empty").isLength({ min: 5 }),
  ],
  async (req, res) => {
    try {
      const { title, description, tag } = req.body;

      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const note = new Notes({
        title,
        description,
        tag,
        user: req.user.id,
      });
      const savedNotes = await note.save();
      res.json(savedNotes);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("some error occoured");
    }
  }
);
router.get("/updatenote/:id", fetchuser, async (req, res) => {
  try {
    const newNote = {};
    const { title, description, tag } = req.body;
    if (title) {
      newNote.title = title;
    }
    if (description) {
      newNote.description = description;
    }
    if (tag) {
      newNote.tag = tag;
    }
    const note = await Notes.findById(req.params.id);
    if (!note) {
      return res.status(404).send("Notes not found");
    }
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed ");
    }
    note = Notes.findByIdAndUpdate(
      req.params.id,
      { $set: newNote },
      { new: true }
    );
    res.json(note);
  } catch (error) {}
});

module.exports = router;
