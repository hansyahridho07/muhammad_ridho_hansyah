const { verifyToken } = require("../helpers/jwt");

function authorization(req, res, next) {
  try {
    const decoded = verifyToken(req.headers.access_token);
    req.decoded = decoded;
    next();
  } catch (error) {
    const errors = {
      name: "customError",
      status: 401,
      message: "Invalid token",
    };
    next(errors);
  }
}

module.exports = authorization;
