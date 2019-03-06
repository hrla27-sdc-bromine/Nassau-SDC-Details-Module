const { ProductStream, sequelize } = require('./index.js');
const generateData = require('./generateData.js');
const path = require('path');
const fs = require('fs');

ProductStream.then(Product => {
  Product.findAll({ limit: 10 }).then(result => {
    if (result.length === 0) {
      generateData().then(() => {
        console.log('data generated, beginning seeding');
        sequelize
          .query(
            `COPY products FROM '${path.resolve(
              __dirname,
              './data.csv'
            )}' WITH (FORMAT csv);`
          )
          .spread(() => {
            fs.unlink(path.resolve(__dirname, './data.csv'), () => {});
            console.log('seeding complete, deleting csv');
          });
      });
    }
  });
});