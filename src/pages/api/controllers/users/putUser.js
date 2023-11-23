const { db } = require('../../db')
const { User } = db

export default async (info) => {
    const user = await User.findOne({
        where: {
            id: info.id
        }
    })
    if(user) {
        await user.update(info)
        return user
    } else {
        throw new Error('El usuario no existe en la base de datos')
    }
}