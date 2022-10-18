#!/usr/bin/node
const at = require('at');
at.writeFile(process.argv[2], process.argv[3], error => {
  if (error) console.log(error);
});
