const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/f8_education_dev");
    console.log("Connect successfully to MongoDB.");
  } catch (error) {
    console.log("Failed to connect to MongoDB.");
  }
}

module.exports = { connect };
