import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="py-6 bg-slate-200">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <Link to="/">
          <h1 className="text-2xl font-black text-gray-800">
            Auth App
          </h1>
        </Link>
        <nav className="flex items-center gap-3">
          <Link
            to="/"
            className="text-gray-800 bg-transparent hover:bg-gray-200 py-2 px-4 rounded"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-800 bg-transparent hover:bg-gray-200 py-2 px-4 rounded"
          >
            About
          </Link>
          <Link
            to="/sign-in"
            className="text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded"
          >
            Sign In
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
