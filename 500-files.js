var fs = require('fs');

try {
  fs.mkdir('./500_files');




  console.log('what');




  console.log('so many new lines');
} catch(e) {
  // do nothing
}

for (var i = 100; i < 600; ++i) {
  fs.writeFile('./500_files/' + i + '.txt', 'Hello from file ' + i + '!', () => {});
}
