const { db } = require('../../db')
const { Expense } = db

export default async(info) => {
    const expense = await Expense.findOne({
        where: {
            id: info.id
        }
    })
    if(expense) {
        await expense.update(info)
        return expense
    } else {
        throw new Error('El gasto no existe en la base de datos')
    }
}