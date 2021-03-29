const Users = require("../models/user");
const { generateToken } = require("../helpers/jwt");
const Redis = require("ioredis");
const redis = new Redis();
class UserController {
  static async createUser(req, res, next) {
    try {
      const {
        userName,
        accountNumber,
        emailAddress,
        identityNumber,
      } = req.body;
      if (!userName || !accountNumber || !emailAddress || !identityNumber) {
        throw {
          name: "customError",
          status: 400,
          message: "Data canot be empty",
        };
      }
      const payload = {
        userName,
        accountNumber,
        identityNumber,
        emailAddress,
      };
      const user = await Users.register(payload);
      const token = generateToken(user.ops[0]);
      redis.del("user:lists");
      res.status(201).json({ access_token: token });
      // const
    } catch (error) {
      next(error);
    }
  }

  static async findAll(req, res, next) {
    try {
      const users = await redis.get("user:lists");
      if (users) {
        console.log("sudah cache");
        res.status(200).json(JSON.parse(users));
      } else {
        console.log("belum cache");
        const users = await Users.find();
        redis.set("user:lists", JSON.stringify(users));
        res.status(200).json(users);
      }
    } catch (error) {}
  }

  static async findUserAccountNumber(req, res, next) {
    try {
      const id = String(req.params.account);
      const accountNumber = await Users.findAccountNumber(id);
      if (!accountNumber) {
        throw { name: "customError", status: 404, message: "Dat not found" };
      }
      res.status(200).json({ accountNumber });
    } catch (error) {
      next(error);
    }
  }

  static async findUserIdentityNumber(req, res, next) {
    try {
      const id = String(req.params.identity);
      const identityNumber = await Users.findIdentityNumber(id);
      if (!identityNumber) {
        throw { name: "customError", status: 404, message: "Dat not found" };
      }
      res.status(200).json({ identityNumber });
    } catch (error) {
      next(error);
    }
  }

  static async updateUser(req, res, next) {
    try {
      const id = String(req.params.id);
      const {
        userName,
        accountNumber,
        emailAddress,
        identityNumber,
      } = req.body;
      if (!userName || !accountNumber || !emailAddress || !identityNumber) {
        throw {
          name: "customError",
          status: 400,
          message: "Data canot be empty",
        };
      }
      const payload = {
        userName,
        accountNumber,
        identityNumber,
        emailAddress,
      };
      await Users.updateUser(id, payload);
      redis.del("user:lists");
      res.status(200).json({ message: "Success edit" });
    } catch (error) {
      next(error);
    }
  }

  static async deleteUser(req, res, next) {
    try {
      const id = String(req.params.id);
      await Users.deleteUser(id);
      redis.del("user:lists");
      res.status(200).json({ message: "Success delete data" });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UserController;
