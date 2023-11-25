const { db } = require('../../db')
const { Expense } = db

export default async(info) => {
    const complete = !info.value || !info.description || !info.userId
    if(complete) throw new Error('Faltan datos')
    const newExpense = await Expense.create(info)
    return newExpense
}