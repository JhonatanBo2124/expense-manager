import getUsers from '../controllers/users/getUsers'
import postUser from '../controllers/users/postUser';
import putUser from '../controllers/users/putUser';

export default async(req, res) => {
    try {
        switch (req.method) {
            case 'GET':
                return res.status(200).json(await getUsers());
            case 'POST':
                const newUser = await postUser(req.body)
                return res.status(200).json(newUser)
            case 'PUT':
                const updateUser = await putUser(req.body)
                return res.status(200).json(updateUser)
            default:
                break;
        }
    } catch (error) {
        return res.status(400).json({error: error.message})
    }
}  