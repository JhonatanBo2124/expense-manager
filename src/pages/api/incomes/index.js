import deleteIncomes from "../controllers/incomes/deleteIncomes";
import getIncomes from "../controllers/incomes/getIncomes";
import postIncomes from "../controllers/incomes/postIncomes";
import putIncomes from "../controllers/incomes/putIncomes";


export default async(req, res) => {
    try {
        switch (req.method) {
            case 'GET':
                const incomes = await getIncomes()
                return res.status(200).json(incomes)
            case 'POST':
                const newIncome = await postIncomes(req.body)
                return res.status(200).json(newIncome)
            case 'PUT':
                const updateIncome = await putIncomes(req.body)
                return res.status(200).json(updateIncome)
            case 'DELETE':
                const deleteIncome = deleteIncomes(req.body)
                return res.status(200).json(deleteIncome)
            default:
                break;
        }
    } catch (error) {
        return res.status(400).json({error: error.message})
    }
} 