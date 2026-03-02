require("dotenv").config();
const app = require("./app.js");
const connectDB = require("./db/db.js");

connectDB();

app.listen("3000", () => {
  console.log("Server running on port 3000");
});
