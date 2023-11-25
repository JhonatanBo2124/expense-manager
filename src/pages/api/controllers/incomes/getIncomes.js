const { db } = require('../../db')
const { User, Income } = db

export default async() => {
    const incomes = Income.findAll({
        atributes: [
            'id', 'value', 'description'
        ],
        include: {
            model: User,
            as: 'user',
            atributes: [
                'id', 'name', 'email'
            ]
        }
    })
    return incomes
}