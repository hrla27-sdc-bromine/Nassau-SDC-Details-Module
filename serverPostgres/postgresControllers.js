const { fetch } = require('../postgresDB/models.js');

module.exports = {
  fetchProduct: (req, res) => {
    console.time('Fetch')
  
    let productId = req.query.id;
    fetch(productId, (err, data) => {
      if (err) {
        console.log (err, 'error')
        res.status(404).end(err);
      } else {
        console.timeEnd('Fetch');
        res.status(200).send(data);
      }
    });
  }
};
