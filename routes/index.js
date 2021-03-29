const router = require("express").Router();
const UserController = require("../controllers/userController");
const authorization = require("../middlewares/authorization");
const authorize = require("../middlewares/authorize");

router.post("/users", UserController.createUser);
router.use(authorization);
router.get("/users", UserController.findAll);
router.get(
  "/users/accountNumber/:account",
  UserController.findUserAccountNumber
);
router.get(
  "/users/identityNumber/:identity",
  UserController.findUserIdentityNumber
);
router.put("/users/:id", authorize, UserController.updateUser);
router.delete("/users/:id", authorize, UserController.deleteUser);

module.exports = router;
