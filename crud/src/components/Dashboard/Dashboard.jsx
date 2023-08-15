import { Outlet } from "react-router-dom";
import SideNav from "./SideNav/SideNav";
import TopNav from "./TopNav/TopNav";

const Dashboard = () => {
  return (
    <>
      <TopNav />
      <div className="grid grid-cols-1 md:grid-cols-5">
        <div className="col-span-1 px-[20px] ">
          <SideNav />
        </div>
        <div className="col-span-4 px-[20px] ">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Dashboard