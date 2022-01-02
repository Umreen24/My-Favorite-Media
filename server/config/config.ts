import dotenv from "dotenv";
dotenv.config();

const SERVER_PORT = process.env.SERVER_PORT || 1337;
const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || "localhost";

const MONGO_USERNAME = process.env.DB_USER;
const MONGO_PASSWORD = process.env.DB_PASS;
const MONGO_HOST = process.env.DB_HOST;

const MONGO = {
  username: MONGO_USERNAME,
  password: MONGO_PASSWORD,
  url: `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOST}`,
};

const SERVER = {
  hostname: SERVER_HOSTNAME,
  port: SERVER_PORT,
};

const config = {
  mongo: MONGO,
  server: SERVER,
};

export default config;
