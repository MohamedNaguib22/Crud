import { Link } from "react-router-dom";

const TopNav = () => {
  return (
    <div className=" bg-gray-100 shadow-md h-[75px]">
      <div className="container flex justify-between items-center h-full py-[10px]">
        <div>
          <Link className="text-[32px] font-bold text-green-500" to="/">
            CRUD
          </Link>
        </div>
        <div>
          <Link
            className="btn text-white h-[55px] text-[18px]  w-[180px]"
            to="/"
          >
            Go To WebSite
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TopNav