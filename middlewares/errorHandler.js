module.exports = (err, req, res, next) => {
  if (err.name === "customError") {
    res.status(err.status).json({ message: err.message });
  } else {
    res.status(500).json({ message: "Internal server error" });
  }
};
