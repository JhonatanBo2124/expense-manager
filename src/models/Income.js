import { DataTypes, UUIDV4 } from 'sequelize'
  
module.exports = (sequelize) => {
    const IncomeModel = sequelize.define('Income', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        value: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    });
    return IncomeModel;
}