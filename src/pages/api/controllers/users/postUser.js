const { db } = require('../../db')
const { User } = db

export default async(info) => {
    const complete = !info.name || !info.email || !info.password
    if(complete) throw new Error('Faltan datos')
    const existEmail = await User.findOne({
        where: {
            email: info.email
        }
    })
    if(existEmail) throw new Error('El email ya esta en uso')
    const newUser = await User.create(info);
    return newUser;
}