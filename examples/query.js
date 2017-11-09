'use strict';

// External lib
var ADODB = require('../');

// Variable declaration
const connection = ADODB.open('Provider=Microsoft.Jet.OLEDB.4.0;Data Source=node-adodb.mdb;');

process.env.DEBUG = 'ADODB';

connection
  .query('SELECT * FROM Users')
  .then((data) => {
    console.log(JSON.stringify(data, null, 2));
  })
  .catch((message) => {
    console.log(message);
  });
