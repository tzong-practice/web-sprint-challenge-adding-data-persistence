// build your server here and require it from index.js
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
require("colors");

const projectRouter = require("./project/router");
const resourceRouter = require("./resource/router");
const taskRouter = require("./task/router");

const server = express();
server.use(helmet());
server.use(morgan("dev"));
server.use(cors());
server.use(express.json());
server.use("", projectRouter);
server.use("", resourceRouter);
server.use("", taskRouter);

module.exports = server;
