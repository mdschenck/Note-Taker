const express = require("express");
const path = require("path");
// const { clog } = require("./middleware/clog");   **Delete Me??
const htmlRoutes = require("./routes/htmlRoutes");

const PORT = process.env.port || 3001;

const app = express();

// // Import custom middleware, "cLog"  **Delete Me??
// app.use(clog);


// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use("/api", api);
app.use(express.static("public"));

app.use("/", htmlRoutes);


app.post('/api/notes',(req, res) +> {
  res.json('post!')
});









// // GET Route for homepage
// app.get("/", (req, res) =>
//   res.sendFile(path.join(__dirname, "/public/index.html"))
// );

// // GET Route for notes page
// app.get("/notes", (req, res) =>
//   res.sendFile(path.join(__dirname, "/public/pages/notes.html"))
// );

// // Wildcard Route for incorrect request
// app.get("*", (req, res) =>
//   res.sendFile(path.join(__dirname, "/public/404.html"))
// );

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
