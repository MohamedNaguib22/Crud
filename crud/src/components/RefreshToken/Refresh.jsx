import { useContext, useEffect, useState } from "react";
import { User } from "../Context/UserProvider";
import axios from "axios";
import Cookies from "universal-cookie";
import { Outlet } from "react-router-dom";
import LoadingPage from "../LoadingPage/LoadingPage";

const Refresh = () => {
  const [loading, setLoading] = useState(true);
  const context = useContext(User);
  console.log(context);
  const token = context.auth.token;
  const cookie = new Cookies();
  const getToken = cookie.get("Bearer");
  console.log(getToken);
  useEffect(() => {
    async function RefreshToken() {
      try {
         await axios
          .post("http://127.0.0.1:8000/api/refresh", null, {
            headers: {
              Authorization: "Bearer " + getToken,
            },
          })
          .then((data) => {
            console.log(data);
            cookie.set("Bearer", data.data.token);
            context.setAuth(() => {
              return {
                userData: data.data.user,
                token: data.data.token,
              };
            });
          });
        
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    token ? setLoading(false) : RefreshToken();
  }, []);
  return loading ? <LoadingPage /> : <Outlet />;
};

export default Refresh;
