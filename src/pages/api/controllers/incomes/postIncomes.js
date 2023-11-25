const { db } = require('../../db')
const { Income } = db

export default async(info) => {
    const complete = !info.value || !info.description || !info.userId
    if(complete) throw new Error('Faltan datos')
    const newIncome = await Income.create(info)
    return newIncome
}