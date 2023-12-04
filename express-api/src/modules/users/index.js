import express from 'express';
import UsersController from './users.controller';

const router = express.Router();

router.get('/', UsersController.getUsers);
router.get('/:id', UsersController.getUserById);
router.post('/', UsersController.create);
router.put('/:id', UsersController.update);
router.delete('/:id', UsersController.delete);

export default router;
