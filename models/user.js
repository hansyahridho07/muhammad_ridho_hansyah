const { ObjectID } = require("mongodb");
const { getDatabase } = require("../config/mongodb");

class Users {
  static register(user) {
    return getDatabase().collection("Users").insertOne(user);
  }

  static find() {
    return getDatabase().collection("Users").find().toArray();
  }

  static findOne(id) {
    return getDatabase()
      .collection("Users")
      .findOne({ _id: ObjectID(id) });
  }

  static findAccountNumber(accountNumber) {
    return getDatabase().collection("Users").findOne({ accountNumber });
  }

  static findIdentityNumber(identityNumber) {
    return getDatabase().collection("Users").findOne({ identityNumber });
  }

  // static findEmail(email) {
  //   return getDatabase().collection("Users").findOne({ email });
  // }

  static updateUser(id, payload) {
    return getDatabase()
      .collection("Users")
      .updateOne(
        { _id: ObjectID(id) },
        {
          $set: payload,
          $currentDate: { lastModified: true },
        }
      );
  }

  static deleteUser(id) {
    return getDatabase()
      .collection("Users")
      .deleteOne({ _id: ObjectID(id) });
  }
}

module.exports = Users;
