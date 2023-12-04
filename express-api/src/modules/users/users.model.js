import { DataTypes } from 'sequelize';
import sequelize from '../../configs/db.config.js';

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default User;
