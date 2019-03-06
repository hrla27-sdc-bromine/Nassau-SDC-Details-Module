const fs = require ('fs');
const dataStream = require ('./dataStream.js');

const writeDataToFile = () => {
  const file = fs.createWriteStream('./postgresDB/data.csv');
  const data = new dataStream();
  const write = data.pipe(file);
  return new Promise((res, rej) => {
    write.on('finish', res);
    write.on('error', rej);
  });
};

module.exports = writeDataToFile;
