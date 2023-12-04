import { HttpException, HttpStatus } from '../../utils';
import UsersService from './users.service';

class UsersController {
  // GET all users
  getUsers = async (req, res, next) => {
    try {
      const users = await UsersService.findAll();
      return res.status(HttpStatus.OK).json(users);
    } catch (error) {
      next(error);
    }
  };

  // GET user by ID
  getUserById = async (req, res, next) => {
    const { id } = req.params;
    try {
      const user = await UsersService.findById(id);
      if (!user) throw new HttpException('User not found', HttpStatus.NOT_FOUND);

      return res.status(HttpStatus.OK).json(user);
    } catch (error) {
      next(error);
    }
  };

  // POST new user
  create = async (req, res, next) => {
    const { name } = req.body;
    try {
      const newUser = await UsersService.create({ name });
      return res.status(HttpStatus.CREATED).json(newUser);
    } catch (error) {
      next(error);
    }
  };

  // PUT update user by ID
  update = async (req, res, next) => {
    const { id } = req.params;
    const { name } = req.body;
    try {
      const user = await UsersService.findById(id);
      if (!user) throw new HttpException('User not found', HttpStatus.NOT_FOUND);

      const updatedUser = await UsersService.update(user, name);
      return res.status(HttpStatus.OK).json(updatedUser);
    } catch (error) {
      next(error);
    }
  };

  // DELETE user by ID
  delete = async (req, res, next) => {
    const { id } = req.params;
    try {
      const user = await UsersService.findById(id);
      if (!user) throw new HttpException('User not found', HttpStatus.NOT_FOUND);

      await UsersService.delete(user);
      return res.status(HttpStatus.NO_CONTENT).send();
    } catch (error) {
      next(error);
    }
  };
}

export default new UsersController();
