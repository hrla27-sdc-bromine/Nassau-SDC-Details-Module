const { ProductStream } = require('./index.js');

module.exports = {
  fetch: (productId, cb) => {
    ProductStream.then(Product => {
      Product.find({ productId })
        .then(product => {
          cb(null, product);
        })
        .catch(err => {
          cb(err, null);
        });
    });
  }
};