const { db } = require('../../db')
const { User } = db

export default async(info) => {
    const userDelete = await User.destroy({
        where: {
            id: info.id
        }
    })
    if(!userDelete) throw new Error(`No se encontro ningun usuario con este id: ${info.id}`)
    return `Usuario ${userDelete.name} eliminado correctamente`
}