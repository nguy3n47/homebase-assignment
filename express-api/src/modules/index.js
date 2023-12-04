import express from 'express';
import usersModule from './users';

const router = express.Router();

router.use('/users', usersModule);

export default router;
