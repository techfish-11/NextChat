// pages/api/chat.js

import { Server } from "socket.io";

export default async function handler(req, res) {
  if (!res.socket.server.io) {
    const httpServer = res.socket.server;
    const io = new Server(httpServer, {
      cors: {
        origin: "*",
      },
    });

    io.on("connection", (socket) => {
      console.log("a user connected");

      socket.on("disconnect", () => {
        console.log("user disconnected");
      });

      socket.on("chat message", (msg) => {
        io.emit("chat message", msg);
      });
    });

    res.socket.server.io = io;
  }

  return res.socket.server.io;
}
