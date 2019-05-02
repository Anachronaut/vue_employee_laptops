'use strict';
module.exports = (sequelize, DataTypes) => {
  const Laptop = sequelize.define('Laptop', {
    brand: DataTypes.STRING,
    model: DataTypes.STRING,
    serialNumber: {
      type: DataTypes.STRING,
      unique: true
    }
  }, {});
  Laptop.associate = function(models) {
    Laptop.belongsTo(models.Employee, {
    foreignKey: 'employeeId',
    onDelete: 'SET NULL'
    })
  };
  return Laptop;
};
