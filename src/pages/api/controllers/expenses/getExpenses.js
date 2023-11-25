const { db } = require('../../db')
const { User, Expense } = db

export default async() => {
    const expenses = Expense.findAll({
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
    return expenses
}