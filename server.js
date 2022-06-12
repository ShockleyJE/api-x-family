const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config({ path: ".env" });

const PORT = 8000;
const IMAGES = path.join(__dirname, "static", "images");
const JAVASCRIPT = path.join(__dirname, "js");
const CSS = path.join(__dirname, "css");
const MONGO_URI =
  "mongodb+srv://node-backend-rw:qUCVSjFV3eHimcE@cluster0.3i4fd.mongodb.net/?retryWrites=true&w=majority";

// Example mongo code

//const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
//client.connect(err => {
//  const collection = client.db("test").collection("devices");
//  // perform actions on the collection object
//  client.close();
//});

app.use(cors());
app.use(express.static("css"));
app.use(express.static("js"));

let characters = {
  loid: {
    name: "Loid Forger",
    age: "unknown",
    occupation: "Spy",
    alias: "Twilight",
    relationships: ["Yor Forger", "Anya Forger"],
  },
  yor: {
    name: "Yor Forger",
    age: 27,
    occupation: "Public servant",
    alias: "Thorn Princess",
    relationships: ["Loid Forger", "Anya Forger", "Yuri Briar"],
  },
  anya: {
    name: "Anya Forger",
    age: "unknown",
    occupation: "Student",
    alias: "Test Subject 007",
    relationships: ["Loid Forger", "Yor Forger"],
  },
  yuri: {
    name: "Yuri",
    age: "unknown",
    occupation: "",
    alias: "Thorn Princess",
    relationships: ["Loid Forger", "Anya Forger", "Yuri Briar"],
    image: "anya.bmp",
  },
  unknown: {
    name: "unknown",
    age: "unknown",
    occupation: "unknown",
    alias: "unknown",
    relationships: ["unknown"],
    image: "unknown",
  },
};

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});

app.get("/api/characters/:name", (request, response) => {
  const name = String(request.params.name);
  if (characters[name]) {
    response.json(characters[name]);
  } else {
    response.json(characters["unknown"]);
  }
});

app.post("/api/characters/", (request, response) => {
  const name = String(request.params.name);
  console.log(request);
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
