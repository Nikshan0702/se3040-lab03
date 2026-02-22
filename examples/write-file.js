const fs = require('fs');

fs.writeFile('examples/file.txt', 'Hello World!', function (err) {
  if (err) throw err;
  console.log('File saved!');
});
