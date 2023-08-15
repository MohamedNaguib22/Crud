/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { TbEditCircle } from "react-icons/tb";
import { Link } from "react-router-dom";
const User = () => {
  const [users, setUsers] = useState([]);
  const [runEffect, useRunEffect] = useState(0);
  useEffect(() => {
    axios("http://127.0.0.1:8000/api/user/show").then((res) => {
      setUsers(res.data);
    });
  }, [runEffect]);
  // const getDate = () => {
  //   axios("http://127.0.0.1:8000/api/user/show").then((res) => {
  //     setUsers(res.data);
  //   });
  // };
    // useEffect(() => {
    //   getDate();
    // }, []);
      // async function handelDelete(id) {
      //   try {
      //     await axios
      //       .delete(`http://127.0.0.1:8000/api/user/delete/${id}`)
      //       .then(() => {
      //         getDate();
      //       });
      //     // if (res.data.status===200) {
      //     //   setRender((prev) => prev +1)
      //     // }
      //   } catch (error) {
      //     console.log(error);
      //   }
      // }
  async function handelDelete(id) {
    try {
      const res = await axios.delete(
        `http://127.0.0.1:8000/api/user/delete/${id}`
      );
      if (res.status === 200) {
        useRunEffect((prev) => prev + 1);
      }
    } catch {
      console.log("mohamed");
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
          {users.map((user, index) => {
            return (
              <tr key={index}>
                <td className="border-green-100 border-r-4 border-b-4 border-solid">
                  {index + 1}
                </td>
                <td className="border-green-100 border-r-4 border-b-4 border-solid">
                  {user.email}
                </td>
                <td className="border-green-100 border-r-4 border-b-4 border-solid">
                  {user.name}
                </td>
                <td className="border-green-100 flex justify-center items-center gap-4 border-b-4 border-solid">
                  <span
                    className="cursor-pointer"
                    onClick={() => handelDelete(user.id)}
                  >
                    <MdDelete size={28} className="inline text-[red]" />
                  </span>
                  <Link to={`${user.id}`} className="cursor-pointer">
                    <TbEditCircle size={28} className="inline text-blue-700" />
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

export default User;
