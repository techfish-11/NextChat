const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const app = express();
app.use(cors()); // CORSミドルウェアを適用

const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "*", // どこからでも通信を許可
    methods: ["GET", "POST"] // 許可するHTTPメソッド
  }
});

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });

  socket.on('message', (message) => {
    console.log('Message received: ' + message);
    io.emit('message', message); // すべてのクライアントにメッセージを送信
  });
});

const PORT = 4000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});