const router = require("express").Router();
const {
  readFromFile,
  readAndAppend,
  writeToFile,
  readAndDelete,
} = require("../helpers/fs");
const { v4: uuidv4 } = require("uuid");

router.get("/notes", (req, res) => {
  readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
  console.log("Get Note Route Called");
});

router.post("/notes", (req, res) => {
  //   store.addNote(req.body);
  //   res.json("post!");

  if (req.body) {
    const newNote = {
      title,
      text,
      note_id: uuidv4(),
    };

    readAndAppend(newNote, "./db/notes.json");
    res.json(newNote);
  } else {
    res.error(`Error creating note.`);
  }
});

router.delete("/notes/:id", (req, res) => {
  readAndDelete(newNote, "./db/db.json");
  res.json("Sucess - Note Deleted");
});

module.exports = router;