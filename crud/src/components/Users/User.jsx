import axios from "axios";
import { useContext, useEffect } from "react";
import { useState } from "react";
import { TbEditCircle } from "react-icons/tb";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { User } from "../Context/UserProvider";

const Users = () => {
  const context = useContext(User);
  const token = context.auth.token;
  const [users, setUsers] = useState([]);
  async function getDate() {
    await axios("http://127.0.0.1:8000/api/user/show", {
      headers: {
        Authorization: "Bearer " + token,
      },
    }).then((data) => setUsers(data.data));
  }
  useEffect(() => {
    getDate();
  }, []);
  async function handelDelete(id) {
    try {
      await axios
        .delete(`http://127.0.0.1:8000/api/user/delete/${id}`, {
          headers: {
            Authorization: "Bearer " + token,
          },
        })
        .then(() => {
          getDate();
        });
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="pt-[20px] container">
      <table className="w-full rounded-lg overflow-hidden border-collapse table-fixed ">
        <thead>
          <tr>
            <th className=" bg-green-600 w-full border-green-100 border-r-4 border-solid text-white py-[10px] ">
              Id
            </th>
            <th className=" bg-green-600 w-full border-green-100 border-r-4 border-solid text-white py-[10px]">
              Email
            </th>
            <th className=" bg-green-600 w-full border-green-100 border-r-4 border-solid text-white py-[10px]">
              User Name
            </th>
            <th className=" bg-green-600 w-full border-green-100 border-solid text-white py-[10px]">
              Delete / Edit
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((item, index) => {
            return (
              <tr key={index}>
                <td className="border-green-100 border-r-4 border-b-4 border-solid">
                  {index + 1}
                </td>
                <td className="border-green-100 border-r-4 border-b-4 border-solid">
                  {item.email}
                </td>
                <td className="border-green-100 border-r-4 border-b-4 border-solid">
                  {item.name}
                </td>
                <td className="border-green-100 border-b-4 border-solid flex justify-center items-center gap-4 ">
                  <span
                    className="cursor-pointer"
                    onClick={() => handelDelete(item.id)}
                  >
                    <MdDelete size={28} className="inline text-[red]" />
                  </span>
                  <Link to={`${item.id}`}>
                    <TbEditCircle size={28} className="inline text-blue-600" />
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
