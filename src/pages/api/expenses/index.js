import deleteExpenses from "../controllers/expenses/deleteExpenses";
import getExpenses from "../controllers/expenses/getExpenses";
import postExpenses from "../controllers/expenses/postExpenses";
import putExpenses from "../controllers/expenses/putExpenses";


export default async(req, res) => {
    try {
        switch (req.method) {
            case 'GET':
                const expenses = await getExpenses()
                return res.status(200).json(expenses)
            case 'POST':
                const newExpense = await postExpenses(req.body)
                return res.status(200).json(newExpense)
            case 'PUT':
                const updateExpense = await putExpenses(req.body)
                return res.status(200).json(updateExpense)
            case 'DELETE':
                const deleteExpense = deleteExpenses(req.body)
                return res.status(200).json(deleteExpense)
            default:
                break;
        }
    } catch (error) {
        return res.status(400).json({error: error.message})
    }
} 