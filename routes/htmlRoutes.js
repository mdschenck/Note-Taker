const path = require("path");
const router = require("express").Router();

// Notes HTML Route
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// 404 Error HTML Route
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/404.html"));
});

module.exports = router;
