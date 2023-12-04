import UsersService from './users.service.js';

class UsersController {
  // GET all users
  getUsers = async (req, res, next) => {
    try {
      const users = await UsersService.findAll();
      return res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  };

  // GET user by ID
  getUserById = async (req, res, next) => {
    const { id } = req.params;
    try {
      const user = await UsersService.findById(id);
      if (!user) return res.status(404).send('User not found');
      return res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  };

  // POST new user
  create = async (req, res, next) => {
    const { name } = req.body;
    try {
      const newUser = await UsersService.create({ name });
      return res.status(201).json(newUser);
    } catch (error) {
      next(error);
    }
  };

  // PUT update user by ID
  update = async (req, res, next) => {
    const { id } = req.params;
    const { name } = req.body;
    try {
      const user = await UsersService.update(id, name);
      return res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  };

  // DELETE user by ID
  delete = async (req, res, next) => {
    const { id } = req.params;
    try {
      const deletedUser = await UsersService.delete(id);
      return res.status(204).json(deletedUser);
    } catch (error) {
      next(error);
    }
  };
}

export default new UsersController();
