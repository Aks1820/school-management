const mongoose = require("mongoose");
const colors = require("colors");

/*
|--------------------------------------------------------------------------
| Connect MongoDB Database
|--------------------------------------------------------------------------
*/

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected successfully".bgGreen.white);
  } catch (error) {
    console.error("MongoDB connection failed".bgRed.white, error.message);

    process.exit(1);
  }
}

module.exports = connectDB;
