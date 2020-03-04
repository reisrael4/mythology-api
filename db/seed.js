const Entities = require("../models/List");
const entitiyData = require("../db/entities.json");

Entities.remove({});
Entities.create(entitiyData)
  .then(entities => {
    console.log(entities);
  })
  .catch(err => {
    console.log(err);
  });
