const { User } = require("../models");

exports.createUser = async (userData) => {
  try {
    const user = await User.create(userData);
    return user;
  } catch (error) {
    throw error;
  }
};

exports.findUserByEmail = async (email) => {
  try {
    const user = await User.findOne({ where: { email } });
    return user;
  } catch (error) {
    throw error;
  }
};

exports.findUserById = async (id) => {
  try {
    const user = await User.findByPk(id);
    return user;
  } catch (error) {
    throw error;
  }
};

exports.updateUser = async (id, updateData) => {
  try {
    const [updated] = await User.update(updateData, { where: { id } });
    if (!updated) {
      throw new Error("User not found");
    }
    const updatedUser = await User.findOne({ where: { id } });
    return updatedUser;
  } catch (error) {
    throw error;
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const offset = (page - 1) * limit;

    const { count, rows } = await User.findAndCountAll({
      limit: limit,
      offset: offset,
      order: [["registrationDate", "DESC"]], // Сортируется по дате регистрации, по убыванию
    });

    res.status(200).json({
      total: count,
      users: rows,
      page: page,
      totalPages: Math.ceil(count / limit),
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to get users", error: error.message });
  }
};
