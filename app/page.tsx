import dynamic from 'next/dynamic';
import Header from '../components/Header';
import Chat from '../components/Chat.client';
import useClient from '../components/Chat.client';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-radial from-red-500 to-purple-500">
      <Header />
      <main className="flex-grow">
        <Chat />
      </main>
    </div>
  );
}
