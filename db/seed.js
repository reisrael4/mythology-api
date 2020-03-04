const List = require("../models/List");
const listData = require("../db/list.json");

List.remove({});
List.create(listData)
  .then(list => {
    console.log(list);
  })
  .catch(err => {
    console.log(err);
  });
