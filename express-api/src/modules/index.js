import express from 'express';
import usersModule from './users/users.module';

const router = express.Router();

router.use('/users', usersModule);

export default router;
