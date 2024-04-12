"use client";

import React from 'react';
import io from 'socket.io-client';


const socket = io('http://localhost:4000');

const HybridChatComponent = () => {
  const [message, setMessage] = React.useState('');
  const [messages, setMessages] = React.useState([]);

  React.useEffect(() => {
    // クライアントサイドでWebSocket接続
    socket.on('connect', () => {
      console.log('Connected to WebSocket on the client side');
    });

    // メッセージを受信したときの処理
    socket.on('message', (data: any) => {
      setMessages((prevMessages: any[]) => [...prevMessages, data]);
    });

    // コンポーネントのアンマウント時にイベントリスナーを解除
    return () => {
      socket.off('connect');
      socket.off('message');
    };
  }, []);

  // メッセージを送信する関数
  const sendMessage = () => {
    if (message.trim()) {
      socket.emit('message', message);
      setMessage('');
    }
  };

  return (
    <div>
      <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
      <button onClick={sendMessage}>送信</button>
      <div>
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
    </div>
  );
};

export default HybridChatComponent;