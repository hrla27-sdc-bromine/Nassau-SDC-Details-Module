const {fetchProduct, deleteItem} = require('../mongoDB/models.js');


module.exports = {
  getProduct: (req, res) => {
    let productId = req.params.id;
    fetchProduct(productId, (err, data) => {
      if (err) {
        res.status(404).end();
      } else {
        res.status(200).send(data);
      }
    });
  },

  deleteProduct: (req, res) => {
    let productId = req.params.id; 
    deleteItem(productId, (err, data) => {
      if (err) {
        res.status(404).end();
      } else {
        res.status(202).end();
      }
    })
  },

  updateProduct: (req, res) => {

  },

  addProduct: (req, res) => {

  }

};

// module.exports = {

//   getProduct: (req, res) => {
//     console.time('Fetch');
//     let id = req.query.id;
//     mongoDB.findOne({ productId: id })
//     .then (product => {
//       res.json (product)
//     })
//     .catch (error => {
//       res.status(400).send(`error processing request: ${error}`)
//     })
//     console.timeEnd('Fetch');
//   },
  
//   deleteProduct: (req, res) => {
//     console.time('Fetch');
//     let id = req.query.id;
//     mongoDB.deleteOne({ productId: id })
//     .then (product => {
//       res.json (product)
//     })
//     .catch (error => {
//       res.status(400).send(`error processing request: ${error}`)
//     })
//     console.timeEnd('Fetch');
//   },
  
//   updateProduct: (req, res) => {
//     console.time('Fetch');
//     let id = req.query.id;
//     mongoDB.updateOne({ productId: id })
//     .then (product => {
//       res.json (product)
//     })
//     .catch (error => {
//       res.status(400).send(`error processing request: ${error}`)
//     })
//     console.timeEnd('Fetch');
//   },
  
//   addProduct: (req, res) => {
//     console.time('Fetch')
//     let product = req.body.product;
//     new mongoDB ({ 
//       product
//     }).save((error, data) => {
//       if (error) {
//         console.log (error)
//       } else {
//         res.status(201).send(data)
//       }
//     });
//   }
// }
