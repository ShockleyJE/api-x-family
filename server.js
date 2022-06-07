const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
//const { path } = require("express/lib/application");

const PORT = 8000;
const IMAGES = path.join(__dirname, "static", "images");
const JAVASCRIPT = path.join(__dirname, "js");
const CSS = path.join(__dirname, "css");

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
    occupation: "Spy",
    alias: "Thorn Princess",
    relationships: ["Loid Forger", "Anya Forger", "Yuri Briar"],
  },
  anya: {
    name: "Anya Forger",
    age: "unknown",
    occupation: "Spy",
    alias: "Test Subject 007",
    relationships: ["Loid Forger", "Anya Forger"],
  },
  yuri: {
    name: "Anya Forger",
    age: "unknown",
    occupation: "Spy",
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

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
