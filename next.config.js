require("dotenv").config();

module.exports = {
  env: {
    PUBLISHABLE_KEY: process.env.PUBLISHABLE_KEY,
    SECRET_KEY: process.env.SECRET_KEY,
  },
};
