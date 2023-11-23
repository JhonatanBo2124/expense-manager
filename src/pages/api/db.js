require('dotenv').config()

const { Sequelize } = require('sequelize')
const UserModel = require('../../models/User')
const ExpenseModel = require('../../models/Expense')
const IncomeModel = require('../../models/Income')

const { postgres_DATABASE, postgres_USER, postgres_PASSWORD, postgres_HOST } = process.env;

const sequelize = new Sequelize( postgres_DATABASE, postgres_USER, postgres_PASSWORD, {
    host: postgres_HOST,
    dialect: 'postgres',
    dialectModule: require('pg'),
    force: false,
    operatorAliases: false,
    logging: false,
    native: false,
   //  dialectOptions: {
   //     ssl: true, 
   //   },
    pool: {
       max: 5,
       min: 0,
       acquire: 30000,
       idle: 10000,
    }
 })

 const db = {}

 db.sequelize = sequelize;
 db.User = UserModel(sequelize)
 db.Expense = ExpenseModel(sequelize)
 db.Income = IncomeModel(sequelize)

 const { User, Expense, Income } = db.sequelize.models;

 User.hasMany(Expense, {as: 'expense', foreignKey: 'userId'})
 Expense.belongsTo(User, {as: 'user', foreignKey: 'userId'})

 User.hasMany(Income, {as: 'income', foreignKey: 'userId'})
 Income.belongsTo(User, {as: 'user', foreignKey: 'userId'})

 db.sequelize.sync();

 module.exports = {
    db
 }