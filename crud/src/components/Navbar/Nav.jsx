import { Link } from "react-router-dom";

const Nav = () => {
  const handelOut = () => {
    window.localStorage.removeItem("email");
    window.location.pathname="/"
  };
  return (
    <div className="bg-gray-100 shadow-md h-[65px]">
      <div className="container h-full flex justify-between items-center px-2">
        <div>
          <Link to="/" className="text-[32px] font-bold text-green-500">
            CRUD SYSTEM
          </Link>
        </div>
        {!window.localStorage.getItem("email") ? (
          <div className="flex gap-8 ">
            <Link to="/login" className="btn text-white ">
              Login
            </Link>
            <Link to="/signup" className="btn text-white  w-[110px]">
              Sign Up
            </Link>
          </div>
        ) : (
          <Link
            onClick={handelOut}
            to="/signup"
            className="btn text-white  w-[110px]"
          >
            LogOut
          </Link>
        )}
      </div>
    </div>
  );
};

export default Nav;
