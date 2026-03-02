const mongoose = require("mongoose");

function connectDB() {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      console.log("Connected to the database successfully");
    })
    .catch((err) => {
      console.log("Couldn't connect to the database", err);
    });
}

module.exports = connectDB;
