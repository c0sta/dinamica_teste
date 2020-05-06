import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import morgan from "morgan";

/* Server */
const server = express();
/* Middlewares */
server.use(cors());
server.use(morgan("dev"));
server.use(express.json());

console.log("funfo");
server.listen(8080);
