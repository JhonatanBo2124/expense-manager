const { db } = require('../../db')
const { Income } = db

export default async(info) => {
    const income = await Income.findOne({
        where: {
            id: info.id
        }
    })
    if(income) {
        await income.update(info)
        return income
    } else {
        throw new Error('El ingreso no existe en la base de datos')
    }
}