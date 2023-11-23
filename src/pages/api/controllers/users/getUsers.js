const { db } = require('../../db')
db.sequelize.sync()
const { User, Expense, Income } = db

export default async() => {
    const users = await User.findAll({
        attributes: [
            'id', 'name', 'image', 'email', 'password'
        ],
        include: [
            {
                model: Expense,
                as: 'expense',
                attributes: [
                    'id',
                    'value',
                    'description',
                ],
            },
            {
                model: Income,
                as: 'income',
                attributes: [
                    'id',
                    'value',
                    'description'
                ]
            }
        ]
    })

    return users;
}