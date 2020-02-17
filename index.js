// server.js
const express = require("express");
const app = express();
const connectDb = require("./src/connection");
const PORT = 8080;

const User = require("./src/user.model");

app.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

app.get("/user-create", async (req, res) => {
  const user = new User({ username: "userTest" });
  await user.save().then(() => console.log("User created"));
  res.send("User created \n");
});

app.listen(PORT, function() {
  console.log(`Listening on ${PORT}`);
  const connectDbIntervalId = setInterval(async () => {
    console.log(`ID is ${connectDbIntervalId}`);

    console.log("Try to connect to db");

    if (await connectToDb()) {
      clearInterval(connectDbIntervalId);
    }
  }, 5000);
});

async function connectToDb() {
  try {
    await connectDb();
    console.log("MongoDb connected");
    return true;
  } catch (error) {
    console.log("MongoDb connection error");
    return false;
  }
}
