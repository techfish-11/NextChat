import { useEffect } from 'react';
import io from 'socket.io-client';

const socket = io();

const Chat = () => {
  useEffect(() => {
    // WebSocket connection
    socket.on('connect', () => {
      console.log('Connected to WebSocket');
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return null; // Rendering nothing
};

// 親コンポーネントに"use client"を追加する
Chat.useClient = true;

export default Chat;