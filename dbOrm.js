const Sequelize = require('Sequelize');

const database = 'shoppers';
const user = 'student';
const password = 'hackreactor';

const sequelize = new Sequelize(database, user, password, {
  dialect: 'mysql'
});

const Shopper = sequelize.define('Shopper', {
  name: Sequelize.STRING,
  email: Sequelize.STRING,
  password: Sequelize.STRING,
  cityState: Sequelize.STRING,
  zipCode: Sequelize.INTEGER,
  phoneNumber: Sequelize.STRING,
  creditCard: Sequelize.STRING,
  expirationDate: Sequelize.DATE,
  cvv: Sequelize.INTEGER,
  billingZipCode: Sequelize.INTEGER
});

module.exports.Shopper = Shopper;