const selectAll = require("./config/orm");
const Orm = require("./config/orm");

const databaseSelection = new Orm();

databaseSelection.selectAll();

databaseSelection.insertOne();

databaseSelection.updateOne();
