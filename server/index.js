import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
const PORT = 3000;
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
  },
});

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.get("/", (req, res) => {
  res.json({ hello: "world" });
});

mongoose
  .connect(
    "mongodb+srv://nhapnhap97:7e0O5qbd8JC3Hk1B@cluster0.kk4r7uh.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connected to database");
    server.listen(PORT, () => console.log(`listening on port ${PORT}`));
  });

// io.on("connection", (socket) => {
//   socket.on("sendMessage", (message) => {
//     io.emit("emitMessage", message);
//   });
//   console.log(`user ${socket.id} connected`);
//   socket.on("disconnect", () => {
//     console.log(`user ${socket.id} connected`);
//   });
// });
