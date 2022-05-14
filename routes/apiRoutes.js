const router = require("express").Router();
// const app = require("express");
const {
  readFromFile,
  readAndAppend,
  writeToFile,
  readAndDelete,
} = require("../helpers/fsUtils");
const { v4: uuidv4 } = require("uuid");

router.get("/notes", (req, res) => {
  readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
  console.log("Get Note Route Called");
});

router.post("/notes", (req, res) => {
  //   store.addNote(req.body);
  //   res.json("post!");

  const { title, text } = req.body;

  if (req.body) {
    const newNote = {
      title,
      text,
      note_id: uuidv4(),
    };
    readAndAppend(newNote, "./db/db.json");
    res.json(newNote);
  } else {
    res.error(`Error creating note.`);
  }
});

router.delete("/notes/:id", (req, res) => {
  console.log(req.params.path);
  const noteId = req.params.note_id; // <-- need to get request path :ID?
  readAndDelete(noteId, "./db/db.json");
  res.json("Sucess - Note Deleted");
});

module.exports = router;
