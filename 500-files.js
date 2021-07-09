var fs = require('fs');

try {
  fs.mkdirSync('./500_files');
} catch(e) {
  // do nothing
}

const [fileCountArg, fileSizeArg] = process.argv.slice(2);
let fileCount = 500;
if (fileCountArg) {
  fileCount = Number.parseInt(fileCountArg);
}

let fileSize = 'small'; // small/big/random
if (fileSizeArg) {
  fileSize = fileSizeArg;
}

for (var i = 0; i < fileCount; ++i) {
  let fileText = `Hello from file ${i}!\n`;
  if (fileSize === 'big' || (fileSize === 'random' && Math.random() < 0.5)) {
    for (let i = 0; i < Math.random() * 10000; ++i) {
      fileText += `Hello from file ${i}!\n`;
    }
  }

  fs.writeFileSync('./500_files/' + i + '.txt', fileText);
}
