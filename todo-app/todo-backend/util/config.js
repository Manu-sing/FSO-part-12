require("dotenv").config();

const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL || undefined;
const REDIS_URL = process.env.REDIS_URL || undefined;

module.exports = {
  MONGO_URL, //: 'mongodb://the_username:the_password@localhost:3456/the_database',
  REDIS_URL,
  PORT, //: '//localhost:6378'
};
