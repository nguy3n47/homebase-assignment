import User from './users.model';

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
      return await User.findByPk(id);
    } catch (error) {
      throw new Error(error);
    }
  };

  create = async (payload) => {
    try {
      return await User.create(payload);
    } catch (error) {
      throw new Error(error);
    }
  };

  update = async (user, name) => {
    try {
      user.name = name;
      return await user.save();
    } catch (error) {
      throw new Error(error);
    }
  };

  delete = async (user) => {
    try {
      return await user.destroy();
    } catch (error) {
      throw new Error(error);
    }
  };
}

export default new UsersService();
