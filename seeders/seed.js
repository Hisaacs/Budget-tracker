let db = require('../models');
const { connect } = require('./../database/connect');

connect();

let transactionSeed = [
  {
    name: "Vacation",
    value: 200,
  },
  {
    name: "Bootcamp",
    value: 4000,
  },
  {
    name: "food",
    value: 120,
  },
  {
    name: "groceries",
    value: 150,
  },
];

db.Transaction.deleteMany({})
  .then(() => db.Transaction.collection.insertMany(transactionSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
