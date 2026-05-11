require("dotenv").config();

const colors = require("colors");

const app = require("./src/app");
const connectDB = require("./src/db/db");

const PORT = process.env.PORT || 3000;

/*
|--------------------------------------------------------------------------
| Database Connection
|--------------------------------------------------------------------------
*/

connectDB();

/*
|--------------------------------------------------------------------------
| Start Server
|--------------------------------------------------------------------------
*/

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`.bgGreen.white);
});
