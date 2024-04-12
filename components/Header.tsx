// components/Header.tsx

const Header = () => {
    return (
      <header className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white p-4 flex justify-between items-center w-full">
        <h1 className="text-2xl font-bold">Next Chat</h1>
        <button className="px-4 py-2 bg-white text-gray-800 rounded hover:bg-gray-300">
          Login
        </button>
      </header>
    );
  };
  
  export default Header;
  