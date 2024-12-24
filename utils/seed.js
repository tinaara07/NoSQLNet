const connection = require("../config/connection");
const { User, Thought } = require("../models");

connection.on("error", (err) => {
  console.error("Connection error:", err);
});

connection.once("open", async () => {
  console.log("connected");
  
  // Delete the collections if they exist
  let thoughtCheck = await connection.db
    .listCollections({ name: "thoughts" })
    .toArray();
  if (thoughtCheck.length) {
    await connection.dropCollection("thoughts");
  }

  let userCheck = await connection.db
    .listCollections({ name: "users" })
    .toArray();
  if (userCheck.length) {
    await connection.dropCollection("users");
  }

  // Populate users and thoughts arrays with data
  const users = [
    // Example user objects
    { username: "user1", email: "user1@example.com" },
    { username: "user2", email: "user2@example.com" },
    { username: "user3", email: "user3@example.com" }
  ];

  const thoughts = [
    // Example thought objects
    { thoughtText: "This is first thought", username: "user1" },
    { thoughtText: "This is second thought", username: "user2" },
    { thoughtText: "This is third thought", username: "user3" }
  ];

  await User.insertMany(users);
  await Thought.insertMany(thoughts);

  console.table(users);
  console.table(thoughts);
  console.info("Seeding complete!");

  // Close the connection
  await connection.close();
  process.exit(0);
});