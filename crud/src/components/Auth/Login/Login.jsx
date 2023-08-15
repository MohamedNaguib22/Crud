import axios from "axios";
import { useContext, useState } from "react";
import { Navbar } from "../../Navbar";
import { User } from "../../Context/UserProvider";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accept, setAccept] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const context = useContext(User);
    const cookie = new Cookies();
  const nav = useNavigate();
  async function Submit(event) {
    event.preventDefault();
    setAccept(true);
    try {
      let res = await axios.post("http://127.0.0.1:8000/api/login", {
        password: password,
        email: email,
      });
      const token = res.data.data.token;
      cookie.set("Bearer", token);
      const userData = res.data.data.user;
      context.setAuth({ token, userData });
      nav("/dashboard");
    } catch (err) {
      if (err.response.status === 401) {
        setErrorEmail(true);
      }
      setAccept(true);
    }
  }
  return (
    <>
      <Navbar />
      <div>
        <div className=" container Forms overflow-hidden flex justify-center items-center">
          <form
            action="/login"
            onSubmit={Submit}
            className="w-[600px] h-auto px-[36px] shadow-xl py-[60px] rounded-lg"
          >
            <h1 className="text-green-400 font-bold text-[56px] mb-[26px] text-center">
              Log In
            </h1>

            <div className="flex justify-between items-center">
              <label className="text-black font-medium" htmlFor="Email">
                Enter Email
              </label>
              {accept && errorEmail && (
                <p className="text-[14px] text-red-400 pr-2">
                  Is Not Sign Up This Email
                </p>
              )}
            </div>
            <input
              id="Email"
              placeholder="Email......"
              className={`h-[45px] mb-[20px] mt-[10px] text-black w-full rounded-lg pl-[20px] outline-none border-2 border-gray-200 focus:border-green-200 focus:border-2 ${
                accept &&
                errorEmail &&
                "border-2 border-red-400 focus:border-red-400"
              } `}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="flex justify-between items-center">
              <label className="text-black font-medium" htmlFor="Password">
                Enter Password
                {password.length < 8 && accept && (
                  <span className="text-[18px] text-red-400 inline-block ml-1">
                    *
                  </span>
                )}
              </label>
              {password.length < 8 && accept && (
                <p className="text-[14px] text-red-400 pr-2">
                  Enter Valid Password
                </p>
              )}
              {accept && errorEmail && (
                <p className="text-[14px] text-red-400 pr-2">
                  Enter Valid Password
                </p>
              )}
            </div>
            <input
              id="Password"
              placeholder="Password......"
              className={`h-[45px] mb-[20px] mt-[10px] text-black w-full rounded-lg pl-[20px] outline-none border-2 border-gray-200 focus:border-green-200 focus:border-2 ${
                accept &&
                errorEmail &&
                "border-2 border-red-400 focus:border-red-400"
              } `}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="flex justify-center items-center">
              <button
                className="w-[200px] h-[50px]  bg-green-600 flex justify-center items-center rounded-lg font-medium text-[16px] text-white transition-all duration-[.3s] hover:bg-green-500 "
                type="submit"
              >
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
