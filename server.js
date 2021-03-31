const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const {connect} = require('./database/connect')
const compression = require("compression");

const PORT = process.env.PORT || 3000;

connect();
const app = express();

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(logger("dev"));

app.use(express.static("public"));

// routes
app.use(require("./routes/api.js"));

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("we are connected");
});


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}! Visit http://localhost:${PORT}/ in your browser`);
});
