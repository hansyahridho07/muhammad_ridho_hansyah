if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const { connect } = require("./config/mongodb");
const routes = require("./routes/index");
const errorHandler = require("./middlewares/errorHandler");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

connect().then(async () => {
  app.use(routes);
  app.use(errorHandler);
  app.listen(PORT, () => {
    console.log(`App listening at: http://localhost:${PORT}`);
  });
});
