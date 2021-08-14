const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
async function connect() {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("Connect MongoDB successfully");
  } catch (error) {
    console.log("Connect MongoDB failure");
  }
}

module.exports = { connect };
