
module.exports = function(sequelize, DataTypes) {
  // Product is a variable and "product" is the table name, lowercase "sequelinze" is connection to table
  // defining as part of property
  var Product = sequelize.define("Product", {
    
    
    name: DataTypes.STRING,
    category: DataTypes.STRING,
    summary: DataTypes.TEXT,
    image: DataTypes.STRING,

  });
  return Product;
};