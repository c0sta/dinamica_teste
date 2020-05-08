import express from "express";
import cors from "cors";
import morgan from "morgan";
import { connect } from "mongoose";
import socketIO from "socket.io";
import http from "http";
import routes from "./src/routes";

/* Server */
const app = express();
const server = http.Server(app);
const io = socketIO(server);

/* Connects DB - Mongo Atlas*/
connect(
  "mongodb+srv://c0staAdmin:vaj860nuUpnIFnry@cluster0-4iy5t.mongodb.net/msgsdb?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("==== DB Connected ====");
  }
);

/* Middlewares */
app.use(cors({ origin: "http://localhost:3000" }));
app.use(morgan("dev"));
app.use(express.json());
app.use(routes);

// Change w/ MongoDB later...
let messages = [];
/**
 * Server IO connection
 */
io.on("connection", (socket) => {
  console.log("New connection => ", socket.id);

  socket.on("sendMessage", (data) => {
    messages.push(data);
    socket.broadcast.emit("receivedMessage", data);
  });

  socket.on("retrieveMessages", () => {
    console.log("==== RETRIEVING MSGS =====", messages);
    socket.broadcast.emit("retrieveMessages", messages);
  });
});

server.listen(8080, () => {
  console.log("==== SUCCESS - API RUNNING IN 8080 ====");
});
