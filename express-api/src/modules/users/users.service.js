import User from './users.model.js';

class UsersService {
  findAll = async () => {
    try {
      return await User.findAll();
    } catch (error) {
      throw new Error(error);
    }
  };

  findById = async (id) => {
    try {
      const user = await User.findByPk(id);
      if (!user) throw new Error('User not found');
      return res.json(user);
    } catch (error) {
      throw new Error(error);
    }
  };

  create = async (name) => {
    try {
      return await User.create({ name });
    } catch (error) {
      throw new Error(error);
    }
  };

  update = async (id, name) => {
    try {
      const user = await User.findByPk(id);
      if (!user) throw new Error('User not found');
      user.name = name;
      await user.save();
      return user;
    } catch (error) {
      throw new Error(error);
    }
  };

  delete = async (id) => {
    try {
      const user = await User.findByPk(id);
      if (!user) throw new Error('User not found');
      await user.destroy();
      return { message: 'User deleted' };
    } catch (error) {
      throw new Error(error);
    }
  };
}

export default new UsersService();
