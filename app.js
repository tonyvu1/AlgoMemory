const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require('path');
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

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const usersRouter = require("./server/routes/users");
app.use("/users", usersRouter);

// Index Route
app.get('/', (req, res) => {
  res.send('invaild endpoint');
});

/***************************** HANDLE PRODUCTION *******************************/
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
