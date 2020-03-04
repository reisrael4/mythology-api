const express = require("express");
const app = express();
const parser = require("body-parser");
const Entities = require("./models/Entities");

app.use(parser.json());

app.get("/", (req, res) => {
  return res.redirect("/entities");
});

app.get("/entities", (req, res) => {
  Entities.find({}).then(entities => {
    res.json(entities);
  });
});

app.get("/entities/:id", (req, res) => {
  Entities.findOne({ _id: req.params.id }).then(entities => {
    res.json(entities);
  });
});

app.get("/entities/:name", (req, res) => {
  Entities.findOne({ name: req.params.name }).then(entities => {
    res.json(entities);
  });
});

app.get("/entities/:work", (req, res) => {
  Entities.find({}).then(entities => {
    Entities.forEach(doc => {
      if (doc.works.includes(req.params.work)) {
        return res.json(entities);
      }
    });
  });
});

app.listen(3000, () =>
  console.log("Is your server running? Better go catch it!")
);
