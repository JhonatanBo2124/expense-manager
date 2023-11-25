const { db } = require('../../db')
const { Income } = db

export default async(info) => {
    const incomeDelete = await Income.destroy({
        where: {
            id: info.id
        }
    })
    if(!incomeDelete) return `No existe el ingreso con id: ${info.id}`
    return `Ingreso eliminado correctamente`
}