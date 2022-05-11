const tips = require("express").Router();
const { readFromFile, readAndAppend } = require("../helpers/fs");
const { v4: uuidv4 } = require("uuid");

// GET Route for retrieving existing notes --

notes.get("/", (req, res) => {
  readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
  console.log("Get Note Route Called");
});

// POST Route for the new note --

notes.post("/", (req, res) => {
  console.log("Post Note Route Called");

  console.log(req.body);
  const { username, topic, tip } = req.body;

  if (req.body) {
    const newNote = {
      title,
      text,
      note_id: uuidv4(),
    };

    readAndAppend(newNote, "./db/tips.json");
    res.json(`Note added.`);
  } else {
    res.error(`Error creating note.`);
  }
});

module.exports = notes;
