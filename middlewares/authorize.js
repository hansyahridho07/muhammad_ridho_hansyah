const Users = require("../models/user");

async function authorize(req, res, next) {
  try {
    const user = await Users.findOne(req.params.id);
    if (String(user._id) === String(req.decoded._id)) {
      next();
    } else {
      throw { name: "customError", status: 401, message: "You not authorize" };
    }
  } catch (error) {
    if (error.name === "customError") {
      next(error);
    } else {
      const errors = {
        name: "customError",
        status: 404,
        message: "Data not found",
      };
      next(errors);
    }
  }
}

module.exports = authorize;
