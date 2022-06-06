const express = require("express");
const app = express();
const cors = require("cors");
const { path } = require("express/lib/application");

const PORT = 8000;
const IMAGES = path.join(__dirname, "static", "images");

app.use(cors());

let characters = {
  Loid: {
    name: "Loid Forger",
    age: "unknown",
    occupation: "Spy",
    alias: "Twilight",
    relationships: ["Yor Forger", "Anya Forger"],
  },
  Yor: {
    name: "Yor Forger",
    age: 27,
    occupation: "Spy",
    alias: "Thorn Princess",
    relationships: ["Loid Forger", "Anya Forger", "Yuri Briar"],
  },
  Anya: {
    name: "Anya Forger",
    age: "unknown",
    occupation: "Spy",
    alias: "Test Subject 007",
    relationships: ["Loid Forger", "Anya Forger"],
  },
  Yuri: {
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
  const id = parseInt(request.params.name);
  if (characters[id]) {
    response.json(characters[id]);
  } else {
    response.json(characters["unknown"]);
  }
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
