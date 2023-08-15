import axios from "axios";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";

const Navbar = () => {
  const cookie = new Cookies();
  const token = cookie.get("Bearer");
  async function handelLoOut() {
    await axios.post("http://127.0.0.1:8000/api/logout", null, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    cookie.remove("Bearer");
    window.location.pathname = "/";
  }
  return (
    <div className="bg-gray-100 shadow-md h-[65px]">
      <div className="container h-full flex justify-between items-center px-2">
        <div>
          <Link to="/" className="text-[32px] font-bold text-green-500">
            CRUD SYSTEM
          </Link>
        </div>
        <div className="flex gap-8 ">
          {!token ? (
            <>
              <Link to="/login" className="btn text-white ">
                Login
              </Link>
              <Link to="/signup" className="btn text-white  w-[110px]">
                Sign Up
              </Link>
            </>
          ) : (
            <>
              <Link to="/dashboard" className="btn text-white  w-[110px]">
                Dashboard
              </Link>
              <Link
                to="/signup"
                className="btn text-white  w-[110px]"
                onClick={handelLoOut}
              >
                LogOut
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
