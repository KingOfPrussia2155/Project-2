module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    // giving the User model a name of type STRING
    image: DataTypes.STRING,
    name: DataTypes.STRING,
    platform: DataTypes.STRING,
    price: DataTypes.FLOAT
  });
  return User;
}