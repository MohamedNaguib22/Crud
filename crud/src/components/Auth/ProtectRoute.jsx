import { useContext } from "react"
import { User } from "../Context/UserProvider";
import { Navigate, Outlet, useLocation } from "react-router-dom"

const ProtectRoute = () => {
  const contextUser = useContext(User);
  const location = useLocation()
  return contextUser.auth.userData ? <Outlet /> : <Navigate state={{from : location}} replace to="/login" />
}

export default ProtectRoute