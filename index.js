const express = require("express");
const app = express();
const parser = require("body-parser");
const List = require("./models/List");

app.use(parser.json());

app.get("/", (req, res) => {
  return res.redirect("/list");
});

app.get("/list", (req, res) => {
  List.find({}).then(list => {
    res.json(list);
  });
});

app.get("/list/:id", (req, res) => {
  List.findOne({ _id: req.params.id }).then(list => {
    res.json(list);
  });
});

app.get("/list/name/:name", (req, res) => {
  List.findOne({ en_name: req.params.name }).then(list => {
    res.json(list);
  });
});

app.get("/list/work/:work", (req, res) => {
  List.find({ works: req.params.work }).then(list => {
    res.json(list);
  });
});

// app.post("/list", (req, res) => {
//   List.create(req.body).then(item => {
//     res.json(item);
//   });
// });

app.listen(3000, () =>
  console.log("Is your server running? Better go catch it!")
);
