import axios from "axios";
import { useContext, useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { User } from "../Context/UserProvider";

const FormUpDate = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordR, setpasswordR] = useState("");
  const [accept, setAccept] = useState(false);
  const context = useContext(User);
  const token = context.auth.token;
  const nav = useNavigate();
  async function Submit(e) {
    e.preventDefault();
    setAccept(true);
    try {
      let res = await axios.post(
        `http://127.0.0.1:8000/api/user/update/${id}`,
        {
          name: name,
          email: email,
          password: password,
          password_confirmation: passwordR,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      nav("/dashboard/users");
    }
    catch (error) {
      console.log(error.response.status);
    }
  }

  const { id } = useParams();
  useEffect(() => {
    axios(`http://127.0.0.1:8000/api/user/showbyid/${id}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    }).then((res) => {
      setName(res.data[0].name);
      setEmail(res.data[0].email);
    });
  }, []);
  return (
    <div className=" container Forms overflow-hidden flex justify-center items-center">
      <form
        className="w-[600px] h-auto px-[36px] shadow-xl py-[60px] rounded-lg"
        onSubmit={Submit}
      >
        <h1 className="text-green-400 font-bold text-[56px] mb-[26px] text-center">
          UP DATE
        </h1>
        <div className="flex justify-between items-center ">
          <label className="text-black font-medium" htmlFor="Name">
            UpDate Name
            {name === "" && accept && (
              <span className="text-[18px] text-red-400 inline-block ml-1">
                *
              </span>
            )}
          </label>

          {name === "" && accept && (
            <p className="text-[14px] text-red-400 pr-2">User Name is Taken</p>
          )}
        </div>
        <input
          id="Name"
          placeholder="Name......"
          className={`h-[45px] mb-[20px] mt-[10px] text-black w-full rounded-lg pl-[20px] outline-none border-2 border-gray-200 focus:border-green-200 focus:border-2 ${
            email === "" &&
            accept &&
            "border-2 border-red-400 focus:border-red-400"
          }
          `}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className="flex justify-between items-center ">
          <label className="text-black font-medium" htmlFor="Name">
            UpDate Email
            {email === "" && accept && (
              <span className="text-[18px] text-red-400 inline-block ml-1">
                *
              </span>
            )}
          </label>

          {email === "" && accept && (
            <p className="text-[14px] text-red-400 pr-2">User Email is Taken</p>
          )}
        </div>
        <input
          id="Email"
          placeholder="Email......"
          className="h-[45px] mb-[20px] mt-[10px] text-black w-full rounded-lg pl-[20px] outline-none border-2 border-gray-200 focus:border-green-200 focus:border-2"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="flex justify-between items-center ">
          <label className="text-black font-medium" htmlFor="Name">
            UpDate Password
            {password.length < 8 && accept && (
              <span className="text-[18px] text-red-400 inline-block ml-1">
                *
              </span>
            )}
          </label>

          {password.length < 8 && accept && (
            <p className="text-[14px] text-red-400 pr-2">
              User Password is Valid
            </p>
          )}
        </div>
        <input
          id="Password"
          placeholder="Password......"
          className={`h-[45px] mb-[20px] mt-[10px] text-black w-full rounded-lg pl-[20px] outline-none border-2 border-gray-200 focus:border-green-200 focus:border-2 ${
            password.length < 8 &&
            accept &&
            "border-2 border-red-400 focus:border-red-400"
          }
          `}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="flex justify-between items-center ">
          <label className="text-black font-medium" htmlFor="Name">
            Enter Password Repeat
            {passwordR !== password && accept && (
              <span className="text-[18px] text-red-400 inline-block ml-1">
                *
              </span>
            )}
          </label>
          {passwordR !== password && accept && (
            <p className="text-[14px] text-red-400 pr-2">User Name is Taken</p>
          )}
        </div>
        <input
          id="PasswordR"
          placeholder="Password Repeat......"
          className={`h-[45px] mb-[20px] mt-[10px] text-black w-full rounded-lg pl-[20px] outline-none border-2 border-gray-200 focus:border-green-200 focus:border-2 ${
            passwordR !== password &&
            accept &&
            "border-2 border-red-400 focus:border-red-400"
          }
          `}
          type="password"
          value={passwordR}
          onChange={(e) => setpasswordR(e.target.value)}
        />
        <div className="flex justify-center items-center">
          <button
            className="w-[200px] h-[50px]  bg-green-600 flex justify-center items-center rounded-lg font-medium text-[16px] text-white transition-all duration-[.3s] hover:bg-green-500 "
            type="submit"
          >
            Up Date
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormUpDate;
