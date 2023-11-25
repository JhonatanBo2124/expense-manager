const { db } = require('../../db')
const { Expense } = db

export default async(info) => {
    const expenseDelete = await Expense.destroy({
        where: {
            id: info.id
        }
    })
    if(!expenseDelete) return `No existe el gasto con id: ${info.id}`
    return `Gasto eliminado correctamente`
}