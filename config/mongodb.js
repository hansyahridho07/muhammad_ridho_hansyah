const { MongoClient } = require("mongodb");

let database = null;

async function connect() {
  try {
    const uri = process.env.MONGO_DB_URI || "mongodb://localhost:27017";
    const client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect();
    const db = client.db("MuhammadRidhoHansyah");
    database = db;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  connect,
  getDatabase() {
    return database;
  },
};
