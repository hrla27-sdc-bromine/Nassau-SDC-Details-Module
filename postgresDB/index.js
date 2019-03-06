const Sequelize = require ('sequelize');
const sequelize = new Sequelize ('abibas', 'shlomo', '', {
  dialect: 'postgres'
});

const Product = sequelize.define(
  'product',
  {
  productId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  name: Sequelize.STRING,
  images: Sequelize.ARRAY(Sequelize.STRING),
  sizes: Sequelize.JSON,
  retailPrice: Sequelize.SMALLINT,
  salePrice: Sequelize.SMALLINT,
  reviewCount: Sequelize.SMALLINT,
  reviewRating: Sequelize.REAL,
  tags: Sequelize.ARRAY(Sequelize.STRING),
  colors: Sequelize.ARRAY(Sequelize.STRING),
  availableColors: Sequelize.ARRAY(Sequelize.INTEGER),
  heartToggle: Sequelize.BOOLEAN
},
 
  { timestamps: false }
);

module.exports.ProductStream = sequelize
  .authenticate()
  .then(() => Product.sync());
module.exports.sequelize = sequelize;