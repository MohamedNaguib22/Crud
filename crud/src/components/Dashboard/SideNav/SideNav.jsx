import { NavLink } from "react-router-dom";
import { FaUsersCog, FaUsers, FaCartPlus } from "react-icons/fa";
import { MdProductionQuantityLimits } from "react-icons/md";
const SideNav = () => {
  return (
    <div className="h-screen border-r pr-[10px] pt-[20px]">
      <ul className=" flex flex-col gap-[20px] ">
        <li className="hover:bg-green-200 w-full py-[10px] group hover:pl-[5px] transition-all duration-[0.3s] rounded-lg ">
          <NavLink className="flex items-center gap-3 " to="/dashboard/users">
            <FaUsers
              className="inline text-green-400 group-hover:text-black  transition-all duration-[0.3s]"
              size={24}
            />{" "}
            <span className="text-black font-medium text-[16px]">Users</span>
          </NavLink>
        </li>
        <li className="hover:bg-green-200 w-full py-[10px] group hover:pl-[5px] transition-all duration-[0.3s] rounded-lg ">
          <NavLink
            className="flex items-center gap-3 "
            to="/dashboard/users/create"
          >
            <FaUsersCog
              className="inline text-green-400 group-hover:text-black  transition-all duration-[0.3s]"
              size={24}
            />{" "}
            <span className="text-black font-medium text-[16px]">
              Create New User
            </span>
          </NavLink>
        </li>
        <li className="hover:bg-green-200 w-full py-[10px] group hover:pl-[5px] transition-all duration-[0.3s] rounded-lg ">
          <NavLink
            className="flex items-center gap-3 "
            to="/dashboard/products"
          >
            <MdProductionQuantityLimits
              className="inline text-green-400 group-hover:text-black  transition-all duration-[0.3s]"
              size={24}
            />{" "}
            <span className="text-black font-medium text-[16px]">Products</span>
          </NavLink>
        </li>
        <li className="hover:bg-green-200 w-full py-[10px] group hover:pl-[5px] transition-all duration-[0.3s] rounded-lg ">
          <NavLink
            className="flex items-center gap-3 "
            to="/dashboard/products/create"
          >
            <FaCartPlus
              className="inline text-green-400 group-hover:text-black  transition-all duration-[0.3s]"
              size={24}
            />{" "}
            <span className="text-black font-medium text-[16px]">
              Create New Product
            </span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default SideNav