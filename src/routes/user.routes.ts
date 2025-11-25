import { Router } from 'express';
import { UserController } from '../controller/user.Controller';

const router = Router();
const userController = new UserController();

router.get('/users/:id', userController.getUserById);
router.post('/users', userController.createUser);

export default router;