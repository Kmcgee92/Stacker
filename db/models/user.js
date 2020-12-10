'use strict';
const { Op } = require('sequelize');
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      email: {
        allowNull: false,
        type: DataTypes.STRING,
        validates: {
          isEmail: true,
          len: [3, 255],
        },
      },
      firstName: {
        allowNull: false,
        type: DataTypes.STRING,
        validates: {
          len: [1, 255],
        },
      },
      hashedPassword: {
        allowNull: false,
        type: DataTypes.STRING.BINARY,
        validates: {
          len: [60, 60],
        },
      },
    },



    {
      defaultScope: {
        attributes: {
          exclude: ["hashedPassword", "createdAt", "updatedAt"],
        },
      },
      scopes: {
        currentUser: {
          attributes: { exclude: ["hashedPassword"] },
        },
        loginUser: {
          attributes: {},
        },
      },
    });

  User.associate = function (models) {
    User.hasMany(models.Album, {foreignKey: "userId", onDelete: "cascade"})
  };

  User.prototype.toSafeObject = function () {
    const {
      id,
      firstName
    } = this;

    return { id, firstName };
  };

  User.login = async function ({ email, password }) {
    const user = await User.scope('loginUser').findOne({
      where: {
        [Op.or]: [{ email }, { email: email }],
      },
    });

    if (user && user.validatePassword(password)) {
      return await User.scope('currentUser').findByPk(user.id);
    }
  };

  User.prototype.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.hashedPassword.toString());
  };

  User.getCurrentUserById = async function (id) {
    return await User.scope("currentUser").findByPk(id);
  };

  User.signup = async function ({ firstName, email, password }) {
    const hashedPassword = bcrypt.hashSync(password);
    const createdUser = await User.create({
      firstName,
      email,
      hashedPassword
    });
    
    return await User.scope("currentUser").findByPk(createdUser.id);
  };

  return User;
};