const path = require("path");

const { MongoClient, ServerApiVersion } = require("mongodb");

let db,
  dbConnectionStr =
    "mongodb+srv://node-backend-rw:qUCVSjFV3eHimcE@cluster0.3i4fd.mongodb.net/?retryWrites=true&w=majority",
  dbName = "characters";

MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true }).then(
  (client) => {
    console.log(`Connected to ${dbName} Database`);
    db = client.db(dbName);
  }
);
