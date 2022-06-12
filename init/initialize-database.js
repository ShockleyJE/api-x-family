const path = require("path");
const fs = require("fs");
const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config({ path: ".env" });

// test the database connection
let db,
  dbName = "characters";

//load the initial characters from json
//https://stackoverflow.com/questions/10011011/using-node-js-how-do-i-read-a-json-file-into-server-memory
let characters = require("./characters.json");

MongoClient.connect(process.env.DB_CONNECTION_STRING, {
  useUnifiedTopology: true,
}).then((client) => {
  console.log(`Connected to ${dbName} Database`);
  db = client.db(dbName);

  // Iterate over the characters in the character json
  // If present in DB, update
  // If not present, insert (via upsert)
  for (let character in characters) {
    db.collection("characters")
      .replaceOne(
        { name: characters[character]["name"] },
        characters[character],
        { upsert: true }
      )
      .then((result) => console.log(`Replaced/ Inserted: ${character}`))
      .catch((error) => console.error(error));
  }
});
