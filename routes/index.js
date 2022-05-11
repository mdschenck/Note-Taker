const express = require("express");
const notesRouter = require("./notes");
// const feedbackRouter = require("./feedback");

const app = express();

app.use("/notes", notesRouter);
// app.use("/feedback", feedbackRouter);

module.exports = app;
