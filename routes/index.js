const router = require("express").Router();
const UserController = require("../controllers/userController");
const authorization = require("../middlewares/authorization");
const authorize = require("../middlewares/authorize");

//create user
router.post("/users", UserController.createUser);
router.use(authorization);
//find all user
router.get("/users", UserController.findAll);
//find user by id
router.get("/users/id/:id", UserController.findUserId);
//find user by accountNumber
router.get(
  "/users/accountNumber/:account",
  UserController.findUserAccountNumber
);
//find user by identityNumber
router.get(
  "/users/identityNumber/:identity",
  UserController.findUserIdentityNumber
);
//edit user
router.put("/users/:id", authorize, UserController.updateUser);
//delete user
router.delete("/users/:id", authorize, UserController.deleteUser);

module.exports = router;
