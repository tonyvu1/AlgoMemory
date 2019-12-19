const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(express.json());

// Connect to db
const db = process.env.DB_URL;

mongoose.connect(db, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDb connected.");
});

app.use(cors());
app.use(express.json());

// Routes
const usersRouter = require("./server/routes/users");
app.use("/users", usersRouter);

/***************************** HANDLE PRODUCTION *******************************/
app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname + "/dist/<name-of-app>/index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
